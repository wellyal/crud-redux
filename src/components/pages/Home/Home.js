import React, { Component } from 'react'
import PeopleService from 'services/people'

import './Home.css'

class Home extends Component {

  componentWillMount() {
    PeopleService.people()
      .then(success => {
        console.log(success)
      })
      .catch(error => {
        console.log('problems with service')
      })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Home
