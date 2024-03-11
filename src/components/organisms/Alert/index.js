import Alert from "./Alert";
import * as selectors from "./alert.selectors";
import * as slice from "./alert.reducers";

export const {
  name,
  actions: { setAlert },
  reducer,
} = slice;

export const { selectAlert } = selectors;

export default Alert;
