import React from 'react'
import { Link } from 'gatsby'

import { Row, Column } from '../components/Grid'
import Layout from '../components/Layout'
import Title from '../components/Title'

const IndexPage = () => (
  <Layout>
    <section>
      <Row>
        <Column size="six" offset="one">
          <Title>
            404 <span style={{ fontWeight: 300 }}>&mdash; not found.</span>
          </Title>
          <p>
            Whatever you’re looking for wasn’t found, but you can always{' '}
            <Link to="/">go home</Link>.
          </p>
        </Column>
      </Row>
    </section>
  </Layout>
)

export default IndexPage
