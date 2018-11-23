// @flow
import React from 'react'

import './font-awesome/css/font-awesome.min.css'

type FontAwesomeProps = {
  icon: string,
}
const FontAwesome = ({ icon }: FontAwesomeProps) => (
  <i aria-label={icon} role="img" alt={icon} className={`fa fa-${icon}`} />
)

export default FontAwesome
