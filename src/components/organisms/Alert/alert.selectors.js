import { name } from "./alert.reducers";

export const selectSlice = (state) => state[name];

export const selectAlert = (state) => selectSlice(state).alert;
