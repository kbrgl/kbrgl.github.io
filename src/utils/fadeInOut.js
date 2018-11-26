import { css } from 'styled-components'

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

export default fadeInOut
