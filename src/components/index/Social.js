// @flow
import React from 'react'
import styled from 'styled-components'

import FontAwesome from '../FontAwesome'

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 0;
  color: #a6a6ab;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3d29f5;
  }
`

type SocialProps = {
  media: Object[],
}
const Social = ({ media }: SocialProps) => {
  const socialIcons = media.map((info, index) => (
    <li
      key={info.name}
      style={{
        display: 'inline-block',
        marginRight: index !== media.length - 1 ? 16 : 0,
      }}
    >
      <SocialLink href={info.url}>
        <FontAwesome icon={info.icon ? info.icon : info.name} />
      </SocialLink>
    </li>
  ))

  return (
    <ul
      style={{
        listStyleType: 'none',
        margin: 0,
      }}
    >
      {socialIcons}
    </ul>
  )
}

export default Social
