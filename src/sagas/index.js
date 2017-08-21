import { all } from 'redux-saga/effects'

import { watchGetPeople } from './people'

export default function* rootSaga() {
  yield all([
    watchGetPeople
  ])
}