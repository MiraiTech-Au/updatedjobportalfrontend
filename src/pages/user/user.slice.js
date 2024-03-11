import { createSlice } from '@reduxjs/toolkit'
import { fetchUser } from './user.action'

const initialState = {
	user: {},
  isAuthenticated: false
}

const slice = createSlice({
	name: 'user',
	initialState,
    reducers: {
      setIsAuthenticated(state, action){
        state.isAuthenticated = action.payload
      }  
    },
    extraReducers: (builder)=> {
      builder.addCase(fetchUser.fulfilled, (state, action)=>{
        if (!action.payload) return;
        state.user = action.payload || state.user;
      })
    }
})

export default slice

export const { name, actions, reducer } = slice