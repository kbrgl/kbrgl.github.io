// @flow
import React from 'react'
import type { Node } from 'react'
import Helmet from 'react-helmet'

import './layout.css'

type LayoutProps = {
  children: Node,
}
const Layout = ({ children }: LayoutProps) => (
  <div>
    <Helmet
      title="Kabir Goel"
      meta={[
        {
          name: 'description',
          content: 'Designer, developer and creator from New Delhi, India.',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <main>{children}</main>
  </div>
)

export default Layout
