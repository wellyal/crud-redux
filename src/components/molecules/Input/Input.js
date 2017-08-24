import React from 'react'

import './Input.css'

const Input = props => (
  <div className="input-container">
    <input
      onChange={props.handleChange}
      required={true}
      id={props.elementId}
      name={props.name}
      type={props.type}
      value={props.value}
      disabled={props.disabled}
    >
    </input>
    <label className="label-field" htmlFor={props.elementId}>
      { props.title }
    </label>
  </div>
)

export default Input