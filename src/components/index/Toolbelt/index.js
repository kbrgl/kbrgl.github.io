import React from 'react'
import styled from 'styled-components'

import Level from '../../Level'

import SectionHeading from '../SectionHeading'

import tools from './info'

const ToolImage = styled.img.attrs({
  alt: '',
})`
  margin-bottom: 0;
  margin-right: 4px;
  height: 1em;
`

const ResponsiveFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Tool = tool => (
  <div key={tool.title}>
    <ResponsiveFlex>
      <div style={{ display: 'flex' }}>
        <ToolImage src={tool.image} />
        <h3>{tool.title}</h3>
      </div>
      <Level level={tool.level} />
    </ResponsiveFlex>
  </div>
)

const Toolbelt = () => (
  <section>
    <SectionHeading>Toolbelt</SectionHeading>
    <div>{tools.map(Tool)}</div>
  </section>
)

export default Toolbelt
