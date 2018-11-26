// @flow
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { useSpring, animated, config, interpolate } from 'react-spring'

import Image from '../../Image'

import caption from './caption.png'

type Query = {
  file: {
    childImageSharp: {
      resize: {
        src: string,
      },
    },
  },
}

const Splash = ({
  file: {
    childImageSharp: {
      resize: { src: splash },
    },
  },
}: Query) => {
  const scaleTemplate = s => `scale(${s})`
  const opacityTemplate = o => `${o}`
  const rotationTemplate = d => `rotate(${d}deg)`
  const [{ scale, opacity, rotation }, set] = useSpring({
    scale: 1,
    opacity: 0,
    rotation: 0,
    config: config.gentle,
  })
  return (
    <div
      style={{
        height: 70,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <animated.div
          style={{
            width: 70,
            height: 70,
            transform: interpolate(
              [
                scale.interpolate(scaleTemplate),
                rotation.interpolate(rotationTemplate),
              ],
              (s, d) => `${s} ${d}`
            ),
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 3px 9px 0 #eaeaef',
          }}
          onMouseEnter={() => set({ scale: 1.2, opacity: 1, rotation: -2 })}
          onMouseLeave={() => set({ scale: 1, opacity: 0, rotation: 0 })}
        >
          <Image data={{ src: splash, aspectRatio: 1 }} />
        </animated.div>
        <animated.div
          style={{
            opacity: opacity.interpolate(opacityTemplate),
            flex: 1,
            display: 'flex',
            filter: 'color(#00f55)',
          }}
        >
          <div
            style={{
              backgroundImage: `url(${caption})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPositionX: 30,
              height: 40,
              flex: 1,
            }}
          />
        </animated.div>
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "kabir.jpg" }) {
          childImageSharp {
            resize(quality: 30) {
              src
            }
          }
        }
      }
    `}
    render={data => <Splash {...data} />}
  />
)
