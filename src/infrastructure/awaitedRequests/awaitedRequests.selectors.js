import { name } from "./awaitedRequests.reducers";
import { buildKey } from "../helpers";

export const selectSlice = (state) => state[name];

export const selectAwaitedRequest = (state, { url, httpMethod }) =>
  selectSlice(state)[buildKey({ url, httpMethod })] || false;
