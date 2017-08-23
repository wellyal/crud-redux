import React from 'react'

import './Header.css'

const Header = props => (
  <div className="person-header">
    <h4>{props.title}</h4>
  </div>
)

export default Header