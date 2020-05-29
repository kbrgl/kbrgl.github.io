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
          Hey there! I’m Kabir, a maker from New Delhi, India.
        </h1>
        <p>
          I love thinking about computers in terms of the ways we interact with
          them, from user interfaces to window managers to programming
          languages. I’m always trying to get better at making minimalist but
          functional interfaces that make people happy.
        </p>
        <p>
          <a href="https://unslant.org">Unslant</a>, a browser extension aimed
          at exposing news readers to different perspectives on news stories, is
          my latest project, and stems from my interest in the role of
          technology in political polarization.
        </p>
        <p>
          I’m the outgoing President of{' '}
          <a href="https://exunclan.com">Exun Clan</a>, the technology club at
          Delhi Public School R.K. Puram. Many of my fondest memories from high
          school are of my time in Exun: winning hackathons, putting up our
          national technology festival, and meeting new people at competitions
          around New Delhi.
        </p>
        <p>
          In fall, I’m going to be headed to the University of California,
          Berkeley, where I’m planning to major in computer science and (maybe)
          double major in political science.
        </p>
        <p>
          I haven’t had a whole lot of time to read this year, but I recently
          finished <em>Super Pumped: The Battle for Uber</em> by Mike Isaac.
        </p>
        <p>
          I have a <a href="https://krandiash.github.io">brother</a>.
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
