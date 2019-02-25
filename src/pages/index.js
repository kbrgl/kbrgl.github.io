import React from 'react'

import { Row, Column } from '../components/Grid'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <section>
      <Row>
        <Column size="seven">
          <h1>
            Hey there! I’m Kabir,
            <br />a designer &amp;&nbsp;developer from New&nbsp;Delhi, India.
          </h1>
        </Column>
      </Row>
      <Row>
        <Column size="six">
          <p>
            I’m a member of{' '}
            <a className="external" href="https://exunclan.com">
              Exun Clan
            </a>
            , the computer club at Delhi&nbsp;Public&nbsp;School, &shy;R.K.
            Puram, where I make things.
          </p>
          <p>
            I’m currently reading <em>The Signal and&shy; the Noise</em> by
            Nate&nbsp;Silver and <em>The&shy; Elements of Typographic Style</em>{' '}
            by Robert&nbsp;Bringhurst.
          </p>
          <p>
            I’ll be heading over to Kennedy Space Center in April for the{' '}
            <a className="external" href="https://www.conradchallenge.org">
              Conrad Challenge
            </a>{' '}
            finals.
          </p>
          <p>
            You can find me on the web on{' '}
            <a className="external" href="https://github.com/kbrgl">
              GitHub
            </a>
            ,{' '}
            <a
              className="external"
              href="https://open.spotify.com/user/12181834510"
            >
              Spotify
            </a>
            ,{' '}
            <a className="external" href="https://codepen.io/kbrgl">
              CodePen
            </a>{' '}
            &amp;{' '}
            <a className="external" href="https://twitter.com/kabirgoel">
              Twitter
            </a>
            , or <a href="mailto:kabirgoel.kg@gmail.com">shoot me an email</a>.
          </p>
        </Column>
      </Row>
    </section>
  </Layout>
)

export default IndexPage
