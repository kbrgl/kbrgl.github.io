import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import formatDate from '../utils/format-date'

import { Row, Column } from '../components/grid'
import Layout from '../components/layout'

import styles from './notes.module.css'

const NotesPage = ({ data }) => (
  <Layout>
    <Row>
      <Column size="six" offset="three">
        <h1 style={{ marginTop: '4rem', marginBottom: '1rem' }}>Notes</h1>
        <p style={{ marginBottom: '4rem' }}>
          Scribblings on various things, addressed to no one in particular.
        </p>
        <ul className={styles.list}>
          {data.allMarkdownRemark.nodes.map(node =>
            !node.frontmatter.draft ? (
              <li key={node.frontmatter.title}>
                <div className={styles.post}>
                  <Link className={styles.link} to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
                  <div className={styles.line} />
                  <span className={styles.meta}>
                    {formatDate(new Date(node.frontmatter.date))}
                  </span>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </Column>
    </Row>
  </Layout>
)
NotesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
}

export const NotesQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          date
          draft
        }
      }
    }
  }
`

export default NotesPage
