// @flow
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../../utils/typography'

import VerticalMargin from '../VerticalMargin'

import Splash from './Splash'
import Bio from './Bio'
import Social from './Social'

type Query = {
  site: {
    siteMetadata: {
      socialMedia: Object[],
    },
  },
}

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            socialMedia {
              name
              url
              icon
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { socialMedia },
      },
    }: Query) => (
      <header>
        <Splash />
        <VerticalMargin top={rhythm(2)}>
          <Bio />
        </VerticalMargin>
        <VerticalMargin top={rhythm(1)}>
          <Social media={socialMedia} />
        </VerticalMargin>
      </header>
    )}
  />
)

export default Header
