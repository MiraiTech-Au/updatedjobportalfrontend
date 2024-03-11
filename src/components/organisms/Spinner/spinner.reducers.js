import { createSlice } from "@reduxjs/toolkit";

const initialState = { spinners: [] };

const slice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    addSpinner(state, action) {
      if (action.payload) state.spinners = [...state.spinners, action.payload];
    },
    removeSpinner(state, action) {
      if (action.payload) {
        const spinnerIndex = state.spinners.indexOf(action.payload);
        if (spinnerIndex !== -1) state.spinners.splice(spinnerIndex, 1);
      }
    },
  },
});

export default slice;

export const { name, actions, reducer } = slice;
