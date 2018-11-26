// @flow
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import FontAwesome from '../FontAwesome'

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 0;
  color: #a6a6ab;
  transition: color 0.3s;

  &:hover {
    color: #3d29f5;
  }
`

type Query = {
  file: {
    childrenSocialJson: Object[],
  },
}

const Social = ({ file: { childrenSocialJson: socialMedia } }: Query) => (
  <ul
    style={{
      listStyleType: 'none',
      margin: 0,
    }}
  >
    {socialMedia.map((info, index) => (
      <li
        key={info.name}
        style={{
          display: 'inline-block',
          marginRight: index !== socialMedia.length - 1 ? 16 : 0,
        }}
      >
        <SocialLink href={info.url}>
          <FontAwesome icon={info.icon ? info.icon : info.name} />
        </SocialLink>
      </li>
    ))}
  </ul>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "social.json" }) {
          childrenSocialJson {
            name
            url
            icon
          }
        }
      }
    `}
    render={data => <Social {...data} />}
  />
)
