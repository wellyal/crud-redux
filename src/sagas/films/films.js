import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'reducers/films'

import filmsService from 'services/films'

function *getFilms(payload) {
  try {
    const filmsList = yield call(filmsService.films, payload)
    console.log(filmsList.data)
    yield put({ type: actionTypes.SUCCESS, payload: filmsList })
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: err })
  }
}

export function *watchGetFilms() {
  yield takeEvery(actionTypes.REQUEST, getFilms)
}