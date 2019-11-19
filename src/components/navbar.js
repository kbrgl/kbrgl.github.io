import React from 'react'
import { Link } from 'gatsby'

import favicon from '../../static/favicon.png'
import externalIcon from '../images/external.svg'

import styles from './navbar.module.css'

const Navbar = () => (
  <header className={styles.header}>
    <div>
      <Link to="/" className={styles.link}>
        <img src={favicon} height="30" alt="" />
        <span className={styles.name}>Kabir Goel</span>
      </Link>
    </div>
    <div>
      <ul className={styles.list}>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dropbox.com/s/yvz9cx3pctuu25d/r%C3%A9sum%C3%A9.pdf?dl=0"
          >
            Résumé{' '}
            <img
              className={styles.external}
              src={externalIcon}
              alt="External link"
            />
          </a>
        </li>
      </ul>
    </div>
  </header>
)

export default Navbar
