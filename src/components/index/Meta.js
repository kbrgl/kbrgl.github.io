import React from 'react'

import styled, { css } from 'styled-components'

const hiddenMixin = `
  opacity: 0;
  font-size: 0;
  margin: 0;
  padding: 0;
  transition: opacity 0.15s, font-size 0.3s 0.15s, margin 0.3s 0.15s,
      padding 0.3s 0.15s;
`
const visibleMixin = `
  transition: font-size 0.15s, margin 0.15s, padding 0.15s, opacity 0.3s 0.15s;
`
const fadeInOut = css`
  ${props => (!props.visible ? hiddenMixin : visibleMixin)};
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
`
const MetaBody = styled.p`
  ${fadeInOut};
`

type MetaState = {
  expanded: boolean,
}
class Meta extends React.Component<{}, MetaState> {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  render() {
    const { expanded } = this.state

    return (
      <section>
        <h2>
          <button
            style={{
              color: '#3d29f5',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() =>
              this.setState(prevState => ({
                expanded: !prevState.expanded,
              }))
            }
            type="button"
          >
            <div style={{ width: '1em' }}>{expanded ? '−' : '+'}</div> Meta
          </button>
        </h2>
        <MetaBody visible={expanded}>
          The website you&#39;re looking at right now has been around since
          September 2015. I&#39;ve used it as a testbed for my ideas: new
          designs, libraries and more. You can find every change I&#39;ve ever
          made to this website{' '}
          <a href="https://github.com/kbrgl/kbrgl.github.io">on GitHub</a>.
        </MetaBody>
      </section>
    )
  }
}

export default Meta
