// @flow
import React from 'react'
import styled from 'styled-components'

import { Transition, config, animated } from 'react-spring'

const Perspective = styled.span`
  perspective: 400px;
  position: absolute;
  display: inline-block;
  backface-visibility: hidden;
`

type Props = {
  items: string[],
}
type State = {
  index: number,
}
class Tagline extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      index: 0,
    }
    this.intervalID = null
  }

  componentDidMount() {
    const { items } = this.props
    this.intervalID = setInterval(() => {
      this.setState(prevState => ({
        index: (prevState.index + 1) % items.length,
      }))
    }, 10 * 1000)
  }

  componentWillUnmount() {
    if (this.intervalID) {
      clearInterval(this.intervalID)
    }
  }

  // eslint-disable-next-line no-undef
  intervalID: ?IntervalID

  render() {
    const { items } = this.props
    const { index } = this.state
    return (
      <Transition
        items={items[index]}
        native
        from={{
          transform: 'translateY(-20px)',
          opacity: 0,
        }}
        enter={{
          transform: 'translateY(0)',
          opacity: 1,
        }}
        leave={{
          transform: 'translateY(20px)',
          opacity: 0,
        }}
        config={config.gentle}
      >
        {item => props => (
          <Perspective>
            <animated.div style={{ display: 'inline-block', ...props }}>
              {item}
            </animated.div>
          </Perspective>
        )}
      </Transition>
    )
  }
}

export default Tagline
