import React from 'react'

import { Row, Column } from '../components/Grid'
import Layout from '../components/Layout'
import Title from '../components/Title'

const IndexPage = () => (
  <Layout>
    <section>
      <Row>
        <Column size="six" offset="one">
          <Title>
            Hey there! I’m Kabir, a designer &amp; developer from
            New&nbsp;Delhi, India.
          </Title>
          <p>
            I’m the President of{' '}
            <a className="external" href="https://exunclan.com">
              Exun Clan
            </a>
            , the computer club at Delhi&nbsp;Public&nbsp;School, &shy;R.K.
            Puram, where I make things.
          </p>
          <p>
            I’m currently reading <em>The Signal and&shy; the Noise</em> by
            Nate&nbsp;Silver and <em>Born&nbsp;a&nbsp;Crime</em> by
            Trevor&nbsp;Noah.
          </p>
          <p>
            In April, I spent an extremely exciting week at the finals summit of
            the <a href="https://conradchallenge.org">Conrad Challenge</a>.
          </p>
          <p>
            On the weekend of May 4–5, I participated at AngelHack Delhi 2019,
            where I won the Grand Prize against 30+ college teams.
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
