import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'reducers/people'

import peopleService from 'services/people'

export function *getPeople() {
  try {
    const status = yield call(peopleService.people)
    yield put({ type: actionTypes.SUCCESS, payload: status })
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: err })
  }
}

export function *watchGetPeople() {
  yield takeEvery(actionTypes.REQUEST, getPeople)
}