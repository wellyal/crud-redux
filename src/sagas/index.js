import { all, fork } from 'redux-saga/effects'

import { watchGetPeople } from './people'
import { watchGetFilms } from './films'

export default function* rootSaga() {
  yield all([
    fork(watchGetPeople),
    fork(watchGetFilms)
  ])
}