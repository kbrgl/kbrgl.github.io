// @flow
import React from 'react'

import { rhythm } from '../../utils/typography'

import VerticalMargin from '../VerticalMargin'

import Bio from './Bio'
import Social from './Social'

const Header = () => (
  <header>
    <Bio />
    <VerticalMargin top={rhythm(0.5)}>
      <Social />
    </VerticalMargin>
  </header>
)

export default Header
