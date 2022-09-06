import React from 'react'
import PropTypes from 'prop-types';
import './badge.css'


export const Badge =({label, color}) => {
  return (
    <span className={['tip', `${color}`].join(' ')}>{label}</span>
  )
}

export default Badge

Badge.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['success', 'info', 'danger', 'warning'])
}

Badge.defaultProps = {
  color: 'success',
  label: ''
}


// Badge.displayName = 'Badge'

// import React from 'react'
// export default function Badge() {
//   return (
//     <div>Badge</div>
//   )
// }
