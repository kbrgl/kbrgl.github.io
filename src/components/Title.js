import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children, style }) => (
  <h1
    style={{
      marginTop: '8rem',
      marginBottom: '4rem',
      ...style,
    }}
  >
    {children}
  </h1>
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
