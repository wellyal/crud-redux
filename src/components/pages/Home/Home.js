import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid/v1'
import Loader from 'components/atoms/Loader'
import Person from 'components/organisms/Person'
import Films from 'components/organisms/Films'
import Species from 'components/organisms/Species'
import Vehicles from 'components/organisms/Vehicles'
import Starships from 'components/organisms/Starships'
import { parseUri } from 'utils'

import './Home.css'

class Home extends PureComponent {

  static propTypes = {
    getPeople: PropTypes.func.isRequired,
    getFilms: PropTypes.func.isRequired,
    people: PropTypes.shape({
      isFetching: PropTypes.boolean,
      success: PropTypes.boolean,
      data: PropTypes.object
    }).isRequired
  }

  state = {
    prestine: false,
    films: null
  }

  componentDidMount() {
    this.props.getPeople()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.people.data && !this.state.prestine) {
      this.props.getFilms(parseUri(nextProps.people.data.films))
      this.setState({ prestine: true })
    }

    if(nextProps.films.success) {
      const { data } = nextProps.films
      this.setState({ films: data })
    }
  }

  render() {
    if(this.props.people.isFetching) return <Loader />

    return (
      <div className="container">
        <div className="home-header">
          <h1>StarWars Profile</h1>
        </div>

        <Person
          data={this.userInfo}
        />

        <Films
          data={this.state.films}
          handleDelete={this.handleDelete}
          handleSaveFilm={this.handleSaveFilm}
          isLoading={this.props.films.isFetching}
        />

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

  handleDelete = (item) => {
    const films = this.state.films.filter( film => {
      return film.data.episode_id !== item.episode_id
    })

    this.setState({ films })
  }

  handleSaveFilm = (itemValues) => {
    const films = [...this.state.films, {data: {...itemValues, episode_id: uuidv1() }}]
    this.setState({ films })
  }
}

export default Home
