import React from 'react'
import Header from 'components/molecules/Header'
import Button from 'components/atoms/Button'
import Loader from 'components/atoms/Loader'

import './Films.css'

const renderFilms = (filmsInfo, handleDelete) => {
  if(!filmsInfo) return null

  return (
    <div>
      { filmsInfo.map(film => {
          return (
            <div key={film.data.episode_id} className="film-block">
              <button onClick={() => handleDelete(film.data)}>Delete</button>
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

const Films = props => {
  const filmsInfo = props.data

  return (
    <section>
      <Header title="Films" />

      {
        props.isLoading
          ? <Loader />
          : <div>{renderFilms(filmsInfo, props.handleDelete)}</div>

      }

    </section>
  )
}


export default Films