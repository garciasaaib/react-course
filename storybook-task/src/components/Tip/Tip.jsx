import React from 'react'
import PropTypes from 'prop-types';
import './tip.css'
import Badge from '../Badge/Badge'

export const Tip = ({ badge, color, children }) => {
  return (
    <div className="tip-wrapper" >
      <Badge label={badge} color={color} /> {children}
    </div>
  )
}

export default Tip

Tip.propTypes = {
  badge: PropTypes.string,
  color: PropTypes.oneOf(['success', 'info', 'danger', 'warning'])
}

Tip.defaultProps = {
  color: 'success',
  badge: 'Tip'
}


// Tip.displayName = 'Tip'

// import React from 'react'
// export default function Tip() {
//   return (
//     <div>Tip</div>
//   )
// }
