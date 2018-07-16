import React from 'react'
import Link from 'gatsby-link'

import Container from './Container'

const Item = ({ children }) => (
  <div
    style={{
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '10px 13px',
      borderRadius: '7px',
      backgroundColor: '#fafafa',
      display: 'inline-block',
    }}
  >
    <h1 style={{ color: '#777' }}>
      {children}
    </h1>
  </div>
)

const Spacer = () => (
  <span style={{height: 0, width: 10}}>
  </span>
)

const Nav = () => (
  <div
    style={{
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '15px',
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div style={{
      display: 'flex',
      flex: 1,
    }}>
      <Item><Link to="/">Kabir Goel</Link></Item>
    </div>
    <div style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
    }}>
      <Item><Link to="/blog">Blog</Link></Item>
      <Spacer />
      <Item><Link to="/showcase">Showcase</Link></Item>
    </div>
  </div>
)

export default Nav
