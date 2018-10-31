// @flow
import React from 'react'
import type { Node } from 'react'

type VerticalMarginProps = {
  children: Node,
  bottom?: number | string,
  top?: number | string,
}
const VerticalMargin = ({ children, top, bottom }: VerticalMarginProps) => (
  <div
    style={{
      marginTop: top,
      marginBottom: bottom,
    }}
  >
    {children}
  </div>
)

VerticalMargin.defaultProps = {
  bottom: 0,
  top: 0,
}

export default VerticalMargin
