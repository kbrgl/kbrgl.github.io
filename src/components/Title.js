import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => (
  <div
    style={{
      marginTop: '4rem',
      marginBottom: '4rem',
    }}
  >
    <h1>{title}</h1>
  </div>
)
Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
