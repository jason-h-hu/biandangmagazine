const path = require(`path`)
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, actions}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const path = createFilePath({node, getNode, basePath: 'pages'});
    actions.createNodeField({node, name: 'path', value: path})
  }
}

exports.createPages = async ({graphql, actions}) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    switch (node.frontmatter.type) {
      case 'article':
        return actions.createPage({
          path: node.fields.path,
          component: path.resolve('./src/components/article/index.jsx'),
          context: {path: node.fields.path},
        });
      case 'recipe':
        return actions.createPage({
          path: node.fields.path,
          component: path.resolve('./src/components/recipe/index.jsx'),
          context: {path: node.fields.path},
        });
      default:
        return;
    }
    
  });
}