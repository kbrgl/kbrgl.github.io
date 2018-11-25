// @flow
import React from 'react'

import { rhythm } from '../../utils/typography'

import VerticalMargin from '../VerticalMargin'

import Splash from './Splash'
import Bio from './Bio'
import Social from './Social'

const Header = () => (
  <header>
    <Splash />
    <VerticalMargin top={rhythm(2)}>
      <Bio />
    </VerticalMargin>
    <VerticalMargin top={rhythm(1)}>
      <Social />
    </VerticalMargin>
  </header>
)

export default Header
