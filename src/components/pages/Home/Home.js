import React, { PureComponent } from 'react'
import Loader from 'components/atoms/Loader'
import Person from 'components/organisms/Person'
import Films from 'components/organisms/Films'
import Species from 'components/organisms/Species'
import Vehicles from 'components/organisms/Vehicles'
import Starships from 'components/organisms/Starships'
import { parseUri } from 'utils'

import './Home.css'

class Home extends PureComponent {

  componentWillMount() {
    this.props.getPeople()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.people.data) {
      this.props.getFilms(parseUri(nextProps.people.data.films))
    }
  }

  render() {
    const { isFetching } = this.props.people
    if(isFetching) return <Loader />

    return (
      <div className="container">
        <div className="home-header">
          <h1>StarWars Profile</h1>
        </div>

        <Person data={this.userInfo} />
        <Films data={this.filmsInfo} />
        <Species />
        <Vehicles />
        <Starships />
      </div>
    )
  }

  get userInfo () {
    const userInfo = { ...this.props.people.data }
    return ({
      name: userInfo.name,
      gender: userInfo.gender,
      birth_year: userInfo.birth_year,
      height: userInfo.height
    })
  }

  get filmsInfo () {
    const filmsInfo = { ...this.props.people.data }
    return ({
      films: filmsInfo.films
    })
  }

}

export default Home
