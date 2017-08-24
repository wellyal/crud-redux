import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/molecules/Header'
import Button from 'components/atoms/Button'
import Loader from 'components/atoms/Loader'
import Input from 'components/molecules/Input'

import './Films.css'

class Films extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      director: PropTypes.string,
      producer: PropTypes.string,
      release_date: PropTypes.string
    })),
    handleDelete: PropTypes.func.isRequired,
    handleSaveFilm: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  static defaultProps = {
    data: [{}]
  }

  state = {
    title: '',
    director: '',
    producer: '',
    release_date: '',
    episode_id: ''
  }

  render() {
    const filmsInfo = this.props.data

    return (
      <section>
        <Header title="Films" />
        { this.props.isLoading
            ? <Loader />
            : <div>
                <div className="form-films">
                  {this.renderFormAddFilm(this.props.handleSaveFilm)}
                  <Button
                    className="success"
                    onClick={() => this.props.handleSaveFilm(this.state)}
                  >
                    Save
                  </Button>
                </div>
                {this.renderFilms(filmsInfo, this.props.handleDelete)}
              </div>
        }
      </section>
    )
  }

  renderFilms = (filmsInfo, handleDelete) => {
    if(!filmsInfo) return null

    return (
      <div>
        { filmsInfo.map(film => {
            return (
              <div key={film.data.episode_id} className="film-block">
                <div className="action-button">
                  <Button className="alert" onClick={() => handleDelete(film.data)}>Delete</Button>
                </div>
                <div className="content">
                  <div>
                    <label>Title: </label>
                    <span>{ film.data.title }</span>
                  </div>
                  <div>
                    <label>Director: </label>
                    <span>{ film.data.director }</span>
                  </div>
                  <div>
                    <label>Producer: </label>
                    <span>{ film.data.producer }</span>
                  </div>
                  <div>
                    <label>Release: </label>
                    <span>{ film.data.release_date }</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderFormAddFilm = () => {
    return (
      <div>
        <Input handleChange={this.handleChange} type="text" name="title" elementId={ this.state.title } title="Title" />
        <Input handleChange={this.handleChange} type="text" name="director" elementId={ this.state.director } title="Director" />
        <Input handleChange={this.handleChange} type="text" name="producer" elementId={ this.state.producer } title="Producer" />
        <Input handleChange={this.handleChange} type="text" name="release_date" elementId={ this.state.release_date } title="Realease Date" />
      </div>
    )
  }

  handleChange = (ev) => {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value
    });
  }
}


export default Films