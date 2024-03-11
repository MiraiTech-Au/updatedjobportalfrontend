import * as selectors from "./spinner.selectors";
import * as slice from "./spinner.reducers";
import Spinner from "./Spinner";
import { SPINNER_NAMES } from "./spinner.constants";

export const {
  name,
  actions: { addSpinner, removeSpinner },
  reducer,
} = slice;

export const { selectSelectedSpinner } = selectors;

export { SPINNER_NAMES };

export default Spinner;
