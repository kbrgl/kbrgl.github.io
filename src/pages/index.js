// @flow
import React from 'react'

import { rhythm } from '../utils/typography'

import Layout from '../components/Layout'
import VerticalMargin from '../components/VerticalMargin'
import Container from '../components/Container'

import Header from '../components/index/Header'
import About from '../components/index/About'
import Education from '../components/index/Education'
import Work from '../components/index/Work'
import Toolbelt from '../components/index/Toolbelt'
import Misc from '../components/index/Misc'
import Meta from '../components/index/Meta'
import Footer from '../components/index/Footer'

const IndexPage = () => (
  <Layout>
    <Container maxWidth={512}>
      <VerticalMargin top={rhythm(4)} bottom={rhythm(4)}>
        <Header />
        <VerticalMargin top={rhythm(2)}>
          <About />
        </VerticalMargin>
        <VerticalMargin top={rhythm(3)}>
          <Education />
        </VerticalMargin>
        <VerticalMargin top={rhythm(3)}>
          <Work />
        </VerticalMargin>
        <VerticalMargin top={rhythm(3)}>
          <Toolbelt />
        </VerticalMargin>
        <VerticalMargin top={rhythm(3)}>
          <Misc />
        </VerticalMargin>
        <VerticalMargin top={rhythm(3)}>
          <Meta />
        </VerticalMargin>
        <VerticalMargin top={rhythm(3)}>
          <Footer />
        </VerticalMargin>
      </VerticalMargin>
    </Container>
  </Layout>
)

export default IndexPage
