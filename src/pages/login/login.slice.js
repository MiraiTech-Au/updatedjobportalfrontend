import { createSlice } from '@reduxjs/toolkit'
import { googleLogin, loginUser } from './login.action'

const initialState = {
    employee:null
  }

const slice = createSlice({
	name: 'login',
	initialState,
    reducers: {
    
      setFetchedData(state, action){
        state.employee = action.payload
      }  
    },
    extraReducers: (builder) => {
      builder.addCase(loginUser.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.employee = action.payload;
      });
      builder.addCase(googleLogin.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.employee = action.payload;
      });
    }
})

export default slice

export const { name, actions, reducer } = slice