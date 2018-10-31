// @flow
import React from 'react'
import type { Node } from 'react'

type PaddingProps = {
  children?: Node,
  all?: number | string | null,
  top?: number | string | null,
  bottom?: number | string | null,
  left?: number | string | null,
  right?: number | string | null,
}
const Padding = ({ children, all, top, bottom, left, right }: PaddingProps) => (
  <div
    style={{
      paddingTop: top !== null ? top : all,
      paddingBottom: bottom !== null ? bottom : all,
      paddingLeft: left !== null ? left : all,
      paddingRight: right !== null ? right : all,
    }}
  >
    {children}
  </div>
)

Padding.defaultProps = {
  children: [],
  all: 0,
  top: null,
  bottom: null,
  left: null,
  right: null,
}

export default Padding
