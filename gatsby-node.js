/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const cssLoaderRe = /\/css-loader\//
const targetFile = '.module.css'

const processRule = rule => {
  if (rule.oneOf) {
    return {
      ...rule,
      oneOf: rule.oneOf.map(processRule),
    }
  }

  try {
    if (!rule.test.test(targetFile)) {
      return rule
    }
  } catch (err) {
    return rule
  }

  if (Array.isArray(rule.use)) {
    return {
      ...rule,
      use: rule.use.map(use => {
        if (!cssLoaderRe.test(use.loader)) {
          return use
        }

        // adjust css-loader options
        return {
          ...use,
          options: {
            ...use.options,
            camelCase: false,
          },
        }
      }),
    }
  }

  return rule
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig()

  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.map(processRule),
    },
  }
  actions.replaceWebpackConfig(newConfig)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark' && !node.frontmatter.draft) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            draft
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.nodes.forEach(node => {
      if (!node.frontmatter.draft) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/note.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      }
    })
  })
}
