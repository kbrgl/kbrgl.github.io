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

const BobWrapper = styled.span`
  cursor: crosshair;
  font-style: normal;

  span {
    display: inline-block;
    padding: 5px;
  }

  &:hover span {
    animation: ${bob} 0.2s infinite alternate;
  }
`

const FooterWrapper = styled.footer`
  color: #535358;
`

const Footer = () => (
  <FooterWrapper>
    <BobWrapper>
      © 2018 Kabir Goel{' '}
      <span role="img" aria-label="">
        🔨
      </span>
    </BobWrapper>
  </FooterWrapper>
)

export default Footer
