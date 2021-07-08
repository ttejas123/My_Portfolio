// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import loginOut from './loginOut'
import invoice from '@src/views/invoice/store/reducer'
const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  loginOut,
  invoice
})

export default rootReducer
