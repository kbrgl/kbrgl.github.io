import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import formatDate from '../utils/format-date'

import Layout from '../components/layout'
import { Row, Column } from '../components/grid'

import styles from './note.module.css'

const NoteTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Row>
        <Column size="six" offset="three">
          <div style={{ marginTop: '4rem' }} className={styles.meta}>
            {formatDate(new Date(post.frontmatter.date))}
          </div>
          <h1 style={{ marginTop: '2rem' }} className={styles.title}>
            {post.frontmatter.title}
          </h1>
          <p style={{ marginBottom: '2rem' }}>{post.frontmatter.description}</p>
          <hr width="50" align="left" />
          <div
            className={styles.body}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <p className={styles.footer}>
            Written by Kabir Goel. Read more like this in{' '}
            <Link to="/notes">my notes</Link>.
          </p>
        </Column>
      </Row>
    </Layout>
  )
}
NoteTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`

export default NoteTemplate
