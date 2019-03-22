/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

const postsPrefix = 'blog';

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

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
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/post.jsx');
  const tagTemplate = path.resolve('./src/templates/tag.jsx');
  const blogTemplate = path.resolve('./src/templates/blog.jsx');

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
        const prev = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

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

      // Create blog subpages
      const postsCount = posts.length;
      const postsPerPage = 6;
      const pagesCount = Math.ceil(postsCount / postsPerPage);

      Array.from({ length: pagesCount }).forEach((page, i) => {
        const currentPage = i + 1;

        createPage({
          path: i === 0 ? `/${postsPrefix}` : `/${postsPrefix}/${currentPage}`,
          component: blogTemplate,
          context: {
            limit: postsPerPage,
            skip: postsPerPage * i,
            pagesCount,
            currentPage,
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

exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: 'babel-plugin-tailwind' });
};
