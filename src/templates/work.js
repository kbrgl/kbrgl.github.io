import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { Row, Column } from '../components/Grid'

const WorkTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Row>
        <Column size="six" offset="one">
          <Title style={{ fontSize: '4.4rem', marginBottom: 0 }}>
            {post.frontmatter.title}
          </Title>
          <h2 style={{ marginBottom: '2rem' }}>
            {post.frontmatter.description}
          </h2>
          <div
            style={{
              overflowWrap: 'break-word',
            }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Column>
      </Row>
    </Layout>
  )
}
WorkTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
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
      }
    }
  }
`

export default WorkTemplate
