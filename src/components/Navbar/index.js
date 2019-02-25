import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.css'

const Navbar = () => (
  <header className="u-cf u-full-width">
    <div className="u-pull-left">
      <Link to="/">
        <div className={styles.circle} />
      </Link>
    </div>
    <div className="u-pull-right">
      <ul className={styles.list}>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <a href="/resume.pdf">Résumé</a>
        </li>
      </ul>
    </div>
  </header>
)

export default Navbar
