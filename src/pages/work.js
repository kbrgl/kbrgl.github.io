import React from 'react'

import { Row, Column } from '../components/Grid'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <section>
      <Row>
        <Column size="seven">
          <h1>Work</h1>
        </Column>
      </Row>
      <Row>
        <Column size="six">
          <p>
            I built the{' '}
            <a className="external" href="//exun.co/app">
              Exun 2018 app
            </a>{' '}
            and{' '}
            <a className="external" href="//exunclan.com">
              website
            </a>
            , which were together used to deliver 58,000+ notifications to
            participants from across India at Exun 2018, the 23rd edition of
            Exun Clan’s annual event.
          </p>
          <p>
            In 9th grade, I interned at{' '}
            <a className="external" href="//attentive.ai">
              Attentive AI
            </a>
            , where I built their website.
          </p>
          <p>
            In addition, I’ve contributed to a number of open-source projects.
          </p>
        </Column>
      </Row>
    </section>
  </Layout>
)

export default IndexPage
