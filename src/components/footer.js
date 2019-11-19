import React from 'react'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>© {new Date().getFullYear()} Kabir Goel</div>
    <div>kabirgoel.kg[at]gmail[dot]com</div>
  </footer>
)

export default Footer
