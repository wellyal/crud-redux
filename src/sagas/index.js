import { all, fork } from 'redux-saga/effects'

import { watchGetPeople } from './people'

export default function* rootSaga() {
  yield all([
    fork(watchGetPeople)
  ])
}