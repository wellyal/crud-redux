import React, { Component } from 'react'

import './Home.css'

class Home extends Component {

  componentWillMount() {
    this.props.getPeople()
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
