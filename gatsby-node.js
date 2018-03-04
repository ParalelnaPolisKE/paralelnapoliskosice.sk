/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    // TODO: separate date from the slug
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false,
    });

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
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

      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach(({ node }, index) => {
        const prev = index === posts.length - 1 ? false : posts[index + 1].node;
        const next = index === 0 ? false : posts[index - 1].node;

        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.jsx'),
          context: {
            slug: node.fields.slug,
            prev,
            next,
          },
        });
      });

      resolve();
    });
  });
};
