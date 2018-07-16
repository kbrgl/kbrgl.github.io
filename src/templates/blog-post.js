import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import VerticalMargin from '../components/VerticalMargin'
import Container from '../components/Container'
import typography from '../utils/typography'

const { rhythm } = typography

const Credit = () => <p style={{ margin: 0, color: '#777' }}>by Kabir Goel</p>

const Header = ({ title, date }) => (
  <header>
    <Helmet title={`${title} | Kabir Goel`} />
    <VerticalMargin bottom={rhythm(1)}>
      <Link to="/blog">
        <span style={{ color: '#777', fontWeight: 'bold' }}>⬅️</span>
      </Link>
    </VerticalMargin>
    <h1>
      {title}{' '}
      <span style={{ fontWeight: 'lighter', color: '#555' }}>
        &mdash; {date}
      </span>
    </h1>
    <Credit />
  </header>
)
Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const BlogPostTemplate = function Template({ pathContext }) {
  const { frontmatter, html } = pathContext
  return (
    <Container maxWidth={512}>
      <VerticalMargin top={rhythm(6)} bottom={rhythm(6)}>
        <div className="blog-post">
          <Container>
            <Header title={frontmatter.title} date={frontmatter.date} />
            <div
              className="blog-post-content"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Container>
        </div>
      </VerticalMargin>
    </Container>
  )
}
BlogPostTemplate.propTypes = {
  pathContext: PropTypes.shape({
    frontmatter: PropTypes.object,
    html: PropTypes.string,
  }).isRequired,
}

export default BlogPostTemplate
