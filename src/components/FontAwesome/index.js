// @flow
import React from 'react'

import './font-awesome/css/font-awesome.min.css'

type FontAwesomeProps = {
  icon: string,
}
const FontAwesome = ({ icon }: FontAwesomeProps) => (
  <i className={`fa fa-${icon}`} />
)

export default FontAwesome
