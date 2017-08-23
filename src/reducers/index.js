import { combineReducers } from 'redux'

import people from './people'
import films from './films'

const rootReducer = combineReducers({
  people,
  films
})

export default rootReducer