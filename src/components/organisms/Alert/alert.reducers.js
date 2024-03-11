import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: null,
};

const slice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alert = action.payload || initialState.alert;
    },
  },
});

export default slice;

export const { name, actions, reducer } = slice;
