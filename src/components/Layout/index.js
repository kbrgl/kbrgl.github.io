// @flow
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Background from '../Background'
import Navbar from '../Navbar'
import { Container, Row, Column } from '../Grid'

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
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Background />
    <main>
      <Container>
        <Row>
          <Column size="six">
            <Navbar />
          </Column>
        </Row>
        {children}
      </Container>
    </main>
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
