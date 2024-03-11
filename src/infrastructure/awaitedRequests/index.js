import * as awaitedRequestsSelectors from "./awaitedRequests.selectors";
import * as slice from "./awaitedRequests.reducers";

export const {
  name,
  actions: { addAwaitedRequest, deleteAwaitedRequest },
  reducer,
} = slice;

export const { selectAwaitedRequest } = awaitedRequestsSelectors;
