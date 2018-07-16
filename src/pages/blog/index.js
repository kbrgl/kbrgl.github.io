import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { basename } from 'path'

import Nav from '../../components/Nav'
import VerticalMargin from '../../components/VerticalMargin'
import Container from '../../components/Container'
import typography from '../../utils/typography'

const { rhythm } = typography

const Title = () => <h1>Blog</h1>

const About = () => (
  <div>
    <p>
      A collection of my thoughts.{' '}
      <span aria-label="" role="img">
        ✏️
      </span>{' '}
      <span style={{ color: '#555' }}>© {new Date().getFullYear()}</span>
    </p>
  </div>
)

const Header = () => (
  <header>
    <Title />
    <VerticalMargin top={rhythm(0.5)}>
      <About />
    </VerticalMargin>
  </header>
)

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <VerticalMargin top={rhythm(6)}>
      <Container maxWidth={512}>
        <Container>
          <Header />
        </Container>
        <VerticalMargin top={rhythm(1.5)}>
          <ul>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <li key={post.id}>
                  <h1>
                    <Link to={`/blog${post.fields.slug}`}>
                      {post.frontmatter.title}
                    </Link>{' '}
                    <span style={{ fontWeight: 'lighter', color: '#555' }}>
                      &mdash; {post.frontmatter.date}
                    </span>
                  </h1>
                </li>
              ))}
          </ul>
        </VerticalMargin>
      </Container>
    </VerticalMargin>
  )
}
IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({ edges: PropTypes.array }),
  }).isRequired,
}

export default IndexPage

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
