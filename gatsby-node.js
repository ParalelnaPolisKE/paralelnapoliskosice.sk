/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require('slugify');

const postsPrefix = 'blog';

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false,
    });
    const date = slug.slice(1, 11);
    const name = slug.slice(12);
    const url = `/${postsPrefix}/${name}`;

    createNodeField({
      node,
      name: 'date',
      value: date,
    });

    createNodeField({
      node,
      name: 'name',
      value: name,
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

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
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
                name
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
