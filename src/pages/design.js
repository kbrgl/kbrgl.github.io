import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Row, Column } from '../components/grid'
import Layout from '../components/layout'

import styles from './design.module.css'

function split(nodes) {
  const col1 = []
  const col2 = []

  nodes.forEach((node, i) => {
    if (i % 2 === 0) {
      col1.push(node)
    } else {
      col2.push(node)
    }
  })

  return (
    <>
      <Column size="six">{col1}</Column>
      <Column size="six">{col2}</Column>
    </>
  )
}

function layoutNodes(nodes) {
  // Construct a dictionary separating nodes of different types.
  // e.g. art, design, etc.
  const types = {}
  nodes.forEach(node => {
    if (!Array.isArray(types[node.type])) {
      types[node.type] = []
    }
    types[node.type].push(node)
  })

  // Construct a separate section for all types.
  return Object.entries(types).map(([type, typeNodes]) => (
    <section className={styles.section} key={type}>
      <Row>
        {split(
          typeNodes.map(node => (
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                fluid={node.media.childImageSharp.fluid}
              />
              <p className={styles.imageTitle}>{node.title}</p>
              {node.description ? (
                <p className={styles.imageDesc}>{node.description}</p>
              ) : null}
            </div>
          ))
        )}
      </Row>
    </section>
  ))
}

const DesignPage = ({ data }) => {
  return (
    <Layout>
      <Row>
        <Column size="six">
          <h1 style={{ marginTop: '5rem', marginBottom: '1rem' }}>
            Art & Design
          </h1>
          <p>Made mostly while procrastinating over other work. 🖌</p>
        </Column>
      </Row>
      <hr style={{ marginBottom: '1rem' }} />
      {layoutNodes(data.allDesignJson.nodes)}
    </Layout>
  )
}
DesignPage.propTypes = {
  data: PropTypes.shape({
    allDesignJson: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
}

export const DesignQuery = graphql`
  query DesignQuery {
    allDesignJson {
      nodes {
        title
        description
        media {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        type
      }
    }
  }
`

export default DesignPage
