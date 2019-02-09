// @flow
import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const Circle = styled.div`
  height: 15px;
  width: 15px;
  margin-left: 10px;
  background: transparent;
  border: 2px solid #b4b4c6;
  border-radius: 50%;

  &:first-of-type {
    margin-left: 0;
  }
`

const Disc = styled(Circle)`
  border: 0;
  filter: drop-shadow(0 2px 3px #eaeaef);
  background-color: #98a4bc;
`

type Props = {
  level: number,
}

const Level = ({ level }: Props) => (
  <div style={{ display: 'flex' }}>
    {_.range(level).map(n => (
      <Disc key={n} />
    ))}
    {_.range(5 - level).map(n => (
      <Circle key={n} />
    ))}
  </div>
)

export default Level
