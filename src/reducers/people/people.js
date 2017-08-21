import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'crud-redux/people/REQUEST',
  SUCCESS: 'crud-redux/people/SUCCESS',
  FAILURE: 'crud-redux/people/FAILURE'
}

const peopleRequest = createAction(actionTypes.REQUEST)

const defaultState = {
  isFetching: false,
  success: null,
  error: null,
  data: null
}

const people = handleActions({
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
      data: payload.data
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

export const getPeople = () => peopleRequest()

export default people