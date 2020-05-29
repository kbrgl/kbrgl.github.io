import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import 'typeface-ibm-plex-sans'
import 'typeface-ibm-plex-serif'

import Navbar from '../navbar'
import { Container } from '../grid'
import Footer from '../footer'

import './normalize.css'
import './skeleton.css'
import styles from './styles.module.css'

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Helmet
      title="Kabir Goel"
      meta={[
        {
          name: 'description',
          content: '17 year old maker from New Delhi, India.',
        },
        {
          name: 'google-site-verification',
          content: 'mYCbMoGP2dt071GwtAtMtstdSx4tkrIBffu2E2fGbOA',
        },
      ]}
      htmlAttributes={{ lang: 'en' }}
    />
    <Container>
      <Navbar />
      <main>{children}</main>
      <hr style={{ marginTop: '8rem' }} />
      <Footer />
    </Container>
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
