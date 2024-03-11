import { createSlice } from "@reduxjs/toolkit";
import { buildKey } from "../helpers";

const slice = createSlice({
  name: "awaitedRequests",
  initialState: {},
  reducers: {
    addAwaitedRequest(state, action) {
      state[buildKey(action.payload)] = {
        turnSpinnerOff: false,
      };
    },
    deleteAwaitedRequest(state, action) {
      delete state[buildKey(action.payload)];
    },
  },
});

export default slice;

export const { name, actions, reducer } = slice;
