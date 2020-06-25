/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    
    const blogTemplate = path.resolve('src/templates/blog.js');
    const res = await graphql(`
        query {
            allContentfulArticle {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulArticle.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}