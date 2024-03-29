import { combineReducers } from 'redux'
import { headerReducer } from '../components/header/headerReducer'

const rootReducer = combineReducers({
  header: headerReducer,
})

export default rootReducer
