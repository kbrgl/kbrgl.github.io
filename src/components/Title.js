import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children, style }) => (
  <div
    style={{
      marginTop: '8rem',
      marginBottom: '4rem',
      ...style,
    }}
  >
    <h1>{children}</h1>
  </div>
)
Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
}
Title.defaultProps = {
  style: {},
}

export default Title
