// @flow
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Background from '../Background'
import Navbar from '../Navbar'
import { Container } from '../Grid'

import './normalize.css'
import './fonts.css'
import './skeleton.css'
import styles from './styles.module.css'

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Helmet
      title="Kabir Goel"
      meta={[
        {
          name: 'description',
          content: '16 year old maker from New Delhi, India.',
        },
        {
          name: 'google-site-verification',
          content: 'mYCbMoGP2dt071GwtAtMtstdSx4tkrIBffu2E2fGbOA',
        },
      ]}
      htmlAttributes={{ lang: 'en' }}
    />
    <Background />
    <main>
      <Container>
        <Navbar />
        {children}
      </Container>
    </main>
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
