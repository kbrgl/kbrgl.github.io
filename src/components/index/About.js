import React from 'react'
import styled, { keyframes } from 'styled-components'

const bob = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-20deg);
  }
`

const EmphasisWrapper = styled.em`
  cursor: crosshair;
  font-style: normal;
  border-bottom: 1px solid #eaeaef;
  padding: 5px;
  transition: border-color 0.3s;

  span {
    display: inline-block;
  }

  &:hover span {
    animation: ${bob} 0.2s infinite alternate;
  }
`

const About = () => (
  <section>
    <p>
      I love{' '}
      <EmphasisWrapper>
        building and tearing down{' '}
        <span aria-label="" role="img">
          🔨
        </span>
      </EmphasisWrapper>{' '}
      things.
    </p>
  </section>
)

export default About
