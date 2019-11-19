import React from 'react'
import { Link } from 'gatsby'

import { Row, Column } from '../components/grid'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Row>
      <Column size="six" offset="three">
        <h1 style={{ marginTop: '4rem' }}>Not Found.</h1>
        <p>
          Whatever you’re looking for wasn’t found, but you can always{' '}
          <Link to="/">go home</Link>.
        </p>
      </Column>
    </Row>
  </Layout>
)

export default IndexPage
