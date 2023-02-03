import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    is_auth: false,
    permission : 0
  },
  reducers: {
    setAuth: (state, action) => {
        state.is_auth = action.payload
    },
    setPermission: (state, action) => {
        state.permission = action.payload
      }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = AuthSlice.actions
export const {setPermission} = AuthSlice.actions
export default AuthSlice.reducer
