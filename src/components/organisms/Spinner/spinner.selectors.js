import { name } from "./spinner.reducers";

export const selectSlice = (state) => state[name];

export const selectSelectedSpinner = (state) => selectSlice(state).spinners;
