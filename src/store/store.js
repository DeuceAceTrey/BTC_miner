import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../Reducers/Auth'

export default configureStore({
  reducer: {
    auth: AuthReducer,
  }
})