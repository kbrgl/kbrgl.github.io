import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children }) => (
  <div
    style={{
      marginTop: '4rem',
      marginBottom: '4rem',
    }}
  >
    <h1>{children}</h1>
  </div>
)
Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
