import React, { Component } from 'react'
import Loader from 'components/atoms/Loader'
import User from 'components/organisms/User'
import Films from 'components/organisms/Films'
import Species from 'components/organisms/Species'
import Vehicles from 'components/organisms/Vehicles'
import Starships from 'components/organisms/Starships'

import './Home.css'

class Home extends Component {

  componentWillMount() {
    this.props.getPeople()
  }

  render() {
    const { isFetching } = this.props.people
    if(isFetching) return <Loader />

    return (
      <div>
        <h1>Person Information</h1>
        <User />
        <Films />
        <Species />
        <Vehicles />
        <Starships />
      </div>
    )
  }
}

export default Home
