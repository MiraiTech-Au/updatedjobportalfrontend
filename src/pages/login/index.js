import slice from './login.slice'
import * as asyncActions from "./login.action";
import * as selectors from './login.selector'

export const {
	name,
	actions: { setFetchedData },
	reducer,
} = slice

export const {
	loginUser, googleLogin
  } = asyncActions;

  export const { selectedFetchedData } = selectors
