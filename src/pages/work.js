import React from 'react'

import { Row, Column } from '../components/Grid'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Showcase from '../components/work/Showcase'

const WorkPage = () => (
  <Layout>
    <section>
      <Row>
        <Column size="six" offset="one">
          <Title>Work</Title>
        </Column>
      </Row>
      <Row>
        <Column size="ten" offset="one">
          <Showcase />
        </Column>
      </Row>
    </section>
  </Layout>
)

export default WorkPage
