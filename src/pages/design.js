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

const DesignPage = ({ data }) => (
  <Layout>
    <Row>
      <Column size="six">
        <h1 style={{ marginTop: '5rem', marginBottom: '1rem' }}>
          Design+Typography
        </h1>
        <p style={{ marginBottom: '4rem' }}>
          A showcase of select works from my portfolio.
        </p>
      </Column>
    </Row>
    <Row>
      {split(
        data.allDesignJson.nodes.map(node => (
          <section>
            <Image
              className={styles.image}
              fluid={node.media.childImageSharp.fluid}
            />
            <p className={styles.imageTitle}>{node.title}</p>
            <p className={styles.imageDesc}>{node.description}</p>
          </section>
        ))
      )}
    </Row>
  </Layout>
)
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
      }
    }
  }
`

export default DesignPage
