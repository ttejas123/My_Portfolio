// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import loginOut from './loginOut'
import CurrentPageTab from './CurrentPageTab'
import invoice from '@src/views/invoice/store/reducer'
import ecommerce from '@src/@core/layouts/components/navbar/store/reducer'
// import notifications from '@src/views/Notification/store/reducer'
import notifications from '@src/views/Notification/All/store/reducer'
const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  loginOut,
  invoice,
  ecommerce,
  notifications,
  CurrentPageTab
})

export default rootReducer
