// @flow
import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, interpolate } from 'react-spring'

import Image from '../../Image'

// $FlowFixMe
import splash from '../../../images/kabir.webp'
import caption from './caption.png'

const Stick = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Branch = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        height: 1,
        flex: 1,
        backgroundColor: '#eaeaef',
      }}
    />
  </div>
)

const Splash = () => {
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
        position: 'relative',
        height: 70,
      }}
    >
      <Stick
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
      </Stick>
      <Stick
        style={{
          zIndex: -1,
        }}
      >
        <Branch />
      </Stick>
    </div>
  )
}

export default Splash
