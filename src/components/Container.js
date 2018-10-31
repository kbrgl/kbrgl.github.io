// @flow
import React from 'react'
import type { Node } from 'react'

type ContainerProps = {
  children: Node,
  maxWidth?: number | string,
}
const Container = ({ children, maxWidth }: ContainerProps) => (
  <div
    style={{
      position: 'relative',
      margin: '0 auto',
      maxWidth,
      padding: '0 1.0875rem 1.45rem',
    }}
  >
    {children}
  </div>
)

Container.defaultProps = {
  maxWidth: 960,
}

export default Container
