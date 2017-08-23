import React from 'react'
import Header from 'components/molecules/Header'
import Button from 'components/atoms/Button'

import './Person.css'

export const Person = props => {
  return (
    <section>
      <Header title="Personal Informations" />
      <Button>Edit</Button>

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