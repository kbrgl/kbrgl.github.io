import React from 'react'
import styled from 'styled-components'

import Level from '../../Level'

import SectionHeading from '../SectionHeading'

import tools from './info'

const ToolImage = styled.img.attrs({
  alt: '',
})`
  margin-bottom: 0;
  margin-right: 10px;
  height: 1em;
`

const ResponsiveFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Tool = tool => (
  <div style={{ marginBottom: '1rem' }} key={tool.title}>
    <ResponsiveFlex>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ToolImage src={tool.image} />
        <span style={{ fontWeight: 'bold' }}>{tool.title}</span>
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
