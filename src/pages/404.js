import React from 'react'

import { Row, Column } from '../components/Grid'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <section>
      <Row>
        <Column size="seven">
          <h1>
            404 <span style={{ fontWeight: 300 }}>&mdash; not found.</span>
          </h1>
        </Column>
      </Row>
      <Row>
        <Column size="six">
          <p>
            Whatever you’re looking for wasn’t found, but you can always go
            home.
          </p>
        </Column>
      </Row>
    </section>
  </Layout>
)

export default IndexPage
