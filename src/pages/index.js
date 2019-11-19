import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Row, Column } from '../components/grid'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <Image
      fluid={data.file.childImageSharp.fluid}
      style={{
        width: 300,
        position: 'absolute',
        zIndex: -1,
        right: 'calc(50% - 150px)',
      }}
    />
    <Row>
      <Column size="six" offset="three">
        <h1 style={{ marginTop: '8rem' }}>
          Hey there! I’m a 17 year old maker from New Delhi, India.
        </h1>
        <p>
          I enjoy identifying problems around myself and solving them with code.
          I’m currently working on <a href="https://unslant.org">Unslant</a>, a
          browser extension aimed at exposing news readers to different
          perspectives on news stories.
        </p>
        <p>
          Design is a big part of everything I build; lately, I’ve been putting
          greater emphasis on design-only work. I also love working with text.
          Typography’s been a big focus of my learning this year&mdash;you can
          see examples in most of my recent projects. (I’m still a beginner, but
          I’m trying to get better!)
        </p>
        <p>
          I’m the President of <a href="https://exunclan.com">Exun Clan</a>, the
          technology club at Delhi Public School R.K. Puram.
        </p>
        <p>
          In April, I spent an extremely exciting week at the finals summit of
          the <a href="https://conradchallenge.org">Conrad Challenge</a>, where
          my team, <a href="https://katanglabs.com">Katang Labs</a>, won the
          NASA Goddard award.
        </p>
        <p>
          I haven’t had a whole lot of time to read this year, but I recently
          finished <em>Zero to One</em> by Peter Thiel and Blake Masters,{' '}
          <em>The Elements of Typographic Style</em> by Robert Bringhurst, and{' '}
          <em>Born a Crime</em> by Trevor Noah.
        </p>
        <p>
          Some shows I recently binged include <em>Terrace House Tokyo</em> and{' '}
          <em>Living with Yourself</em>.
        </p>
        <p>
          Yes, I have a <a href="https://krandiash.github.io">brother</a>.
        </p>
        <p>
          Sometimes <a href="https://twitter.com/KabirGoel">I tweet</a>.
        </p>
      </Column>
    </Row>
  </Layout>
)
IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "outline.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
