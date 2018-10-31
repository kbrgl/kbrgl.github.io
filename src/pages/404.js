import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import VerticalMargin from '../components/VerticalMargin'
import Container from '../components/Container'

import { rhythm } from '../utils/typography'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <VerticalMargin top={rhythm(6)}>
        <h1>
          <Link to="/">
            404 <span style={{ fontWeight: 'normal' }}>&mdash; Not Found.</span>
          </Link>
        </h1>
      </VerticalMargin>
    </Container>
  </Layout>
)

export default NotFoundPage
