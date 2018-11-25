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
          404 <span style={{ fontWeight: 'normal' }}>&mdash; Not Found.</span>{' '}
          😐
        </h1>
        <p>
          But you can always <Link to="/">go home</Link>.
        </p>
      </VerticalMargin>
    </Container>
  </Layout>
)

export default NotFoundPage
