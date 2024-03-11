import slice from './signup.slice'
import * as asyncActions from "./signup.action";
import * as selectors from './signup.selector'

export const {
	name,
	actions: { setFetchedData },
	reducer,
} = slice

export const {
	signupUser,
  } = asyncActions;

  export const { selectedFetchedData } = selectors
