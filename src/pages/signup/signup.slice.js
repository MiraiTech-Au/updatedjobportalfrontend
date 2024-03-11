import { createSlice } from '@reduxjs/toolkit'
import { signupUser } from './signup.action'

const initialState = {
    employee:null
  }

const slice = createSlice({
	name: 'signup',
	initialState,
    reducers: {
    
      setFetchedData(state, action){
        state.employee = action.payload
      }  
    },
    extraReducers: (builder)=> {
      builder.addCase(signupUser.fulfilled, (state, action)=>{
        if (!action.payload) return;
        state.employee = action.payload || state.employee;
      })
    }
})

export default slice

export const { name, actions, reducer } = slice