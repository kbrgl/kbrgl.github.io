import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
)
Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Column = ({ children, size, offset }) => (
  <div
    className={`${styles[size]} ${styles.columns} ${
      offset || offset === 'zero' ? styles[`offset-by-${offset}`] : ''
    }`}
  >
    {children}
  </div>
)
Column.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'one-third',
    'two-thirds',
    'one-half',
  ]).isRequired,
  offset: PropTypes.oneOf([
    '',
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'one-third',
    'two-thirds',
    'one-half',
  ]),
}
Column.defaultProps = {
  offset: '',
}

export const Row = ({ children }) => (
  <div className={styles.row}>{children}</div>
)
Row.propTypes = {
  children: PropTypes.node.isRequired,
}
