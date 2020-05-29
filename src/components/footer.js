import React from 'react'
import { Container } from './grid'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.footerContent}>
        <div>© {new Date().getFullYear()} Kabir Goel</div>
        <div>kabirgoel.kg[at]gmail[dot]com</div>
      </div>
    </Container>
  </footer>
)

export default Footer
