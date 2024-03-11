import { createSlice } from '@reduxjs/toolkit'
import { fetchUser, getUser, updateUser, uploadImage } from './profile.action'

const initialState = {
    globalVariable: false,
    fetchedData: {
      email: '',
      personalInfo: {},
      additionalInfo:{},
      profileImage:''
    }
  }

const slice = createSlice({
	name: 'profile',
	initialState,
    reducers: {
      updateGlobaVariable(state, action){
        state.globalVariable = action.payload
      }  , 
      setFetchedData(state, action){
        state.fetchedData = action.payload
      }  
    },
    extraReducers: (builder)=> {
      builder.addCase(fetchUser.fulfilled, (state, action)=>{
        if (!action.payload) return;
        state.fetchedData = action.payload || state.fetchedData;
      })
      builder.addCase(getUser.fulfilled, (state, action)=>{
        if (!action.payload) return;
        state.fetchedData = action.payload || state.fetchedData;
      })
    }
})

export default slice

export const { name, actions, reducer } = slice