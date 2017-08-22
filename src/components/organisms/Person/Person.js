import React from 'react'

import './Person.css'

export const Person = props => {
  return (
    <section>
      <div className="person-header">
        <h4>Personal Informations</h4>
        <a href="#">edit</a>
      </div>

      <div>
        <label>Name: </label>
        <span>{ props.data.name }</span>
      </div>

      <div>
        <label>Gender: </label>
        <span>{ props.data.gender }</span>
      </div>

      <div>
        <label>Birth Year: </label>
        <span>{ props.data.birth_year }</span>
      </div>

      <div>
        <label>Height: </label>
        <span>{ props.data.height }</span>
      </div>
    </section>
  )
}

export default Person