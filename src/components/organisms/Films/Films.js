import React, { PureComponent } from 'react'
import Header from 'components/molecules/Header'
import Button from 'components/atoms/Button'
import Loader from 'components/atoms/Loader'

import './Films.css'

class Films extends PureComponent {

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
                <Button onClick={() => this.props.handleAdd(this.state)}>Add Film</Button>
                <div>{this.renderFormAddFilm(this.props.handleAdd)}</div>
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
                <Button onClick={() => handleDelete(film.data)}>Delete</Button>
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
            )
          })
        }
      </div>
    )
  }

  renderFormAddFilm = () => {
    return (
      <div>
        <div>
          <label>Title</label>
          <input name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <div>
          <label>Director</label>
          <input name="director" value={this.state.director} onChange={this.handleChange}/>
        </div>
        <div>
          <label>Producer</label>
          <input name="producer" value={this.state.producer} onChange={this.handleChange}/>
        </div>
        <div>
          <label>Release</label>
          <input name="release_date" value={this.state.release_date} onChange={this.handleChange}/>
        </div>
        <div>
          <label>Episode</label>
          <input name="episode_id" value={this.state.episode_id} onChange={this.handleChange}/>
        </div>
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