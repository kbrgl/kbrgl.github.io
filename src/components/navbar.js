import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import externalIcon from '../images/external.svg'

import styles from './navbar.module.css'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header className={styles.header}>
        <div>
          <Link to="/" className={styles.link}>
            <Image fixed={data.file.childImageSharp.fixed} />
            <span className={styles.name}>Kabir Goel</span>
          </Link>
        </div>
        <div>
          <ul className={styles.list}>
            <li>
              <Link to="/design">Design</Link>
            </li>
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
    )}
  />
)

export default Navbar
