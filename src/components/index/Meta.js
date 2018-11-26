import React from 'react'
import styled from 'styled-components'

import fadeInOut from '../../utils/fadeInOut'

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