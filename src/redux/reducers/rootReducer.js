// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import loginOut from './loginOut'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  loginOut
})

export default rootReducer
