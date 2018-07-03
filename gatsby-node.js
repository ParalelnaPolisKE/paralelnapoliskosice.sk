/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

const postsPrefix = 'blog';

exports.onCreateNode = ({ node, getNode, getNodes, actions }) => {
  const { createNodeField, createParentChildLink } = actions;
  const nodes = getNodes();

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false,
    });
    const date = slug.slice(1, 11);
    const url = `/${postsPrefix}${slug}`;

    createNodeField({
      node,
      name: 'date',
      value: date,
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'url',
      value: url,
    });

    // Attach thumbnail's ImageSharp node by public path if necessary
    // @see https://github.com/simonyiszk/mvk-web
    // if (typeof node.frontmatter.cover === 'string') {
    //   const pathToFile = path
    //     .join(__dirname, 'static', node.frontmatter.cover)
    //     .split(path.sep)
    //     .join('/');

    //   const fileNode = nodes.find(node => node.absolutePath === pathToFile);

    //   if (fileNode) {
    //     const imageSharpNodeId = fileNode.children.find(node =>
    //       node.endsWith('>> ImageSharp')
    //     );
    //     const imageSharpNode = nodes.find(node => node.id === imageSharpNodeId);

    //     createParentChildLink({ parent: node, child: imageSharpNode });
    //   }
    // }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/post.jsx');
  const tagTemplate = path.resolve('./src/templates/tag.jsx');

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
          edges {
            node {
              fields {
                date
                slug
                url
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      // Create post pages
      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach(({ node }, index) => {
        const prev = index === posts.length - 1 ? false : posts[index + 1].node;
        const next = index === 0 ? false : posts[index - 1].node;

        createPage({
          path: node.fields.url,
          component: postTemplate,
          context: {
            ...node.fields,
            prev,
            next,
          },
        });
      });

      // Create tag pages
      const tags = posts.reduce((allTags, post) => {
        const { tags } = post.node.frontmatter;

        if (tags) {
          tags.forEach(tag => {
            if (!allTags.includes(tag)) {
              allTags.push(tag);
            }
          });
        }

        return allTags;
      }, []);

      tags.forEach(tag => {
        createPage({
          path: `/tag/${slugify(tag)}`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });

      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Absolute imports https://next.gatsbyjs.org/docs/add-custom-webpack-config#absolute-imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
