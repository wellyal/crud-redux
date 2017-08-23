import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'crud-redux/films/REQUEST',
  SUCCESS: 'crud-redux/films/SUCCESS',
  FAILURE: 'crud-redux/films/FAILURE'
}

const filmsRequest = createAction(actionTypes.REQUEST)

const defaultState = {
  isFetching: false,
  success: null,
  error: null,
  data: null
}

const films = handleActions({
  [actionTypes.REQUEST](state) {
    return {
      ...state,
      isFetching: true
    }
  },
  [actionTypes.SUCCESS](state, {payload}) {
    return {
      ...state,
      isFetching: false,
      success: true,
      data: payload
    }
  },
  [actionTypes.FAILURE](state, {payload}) {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  }
}, defaultState)

export const getFilms = payload => {
  return filmsRequest(payload)
}

export default films