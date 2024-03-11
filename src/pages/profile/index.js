import Profile from "./profile";
import slice from './profile.slice'
import * as asyncActions from "./profile.action";
import * as selectors from './profile.selector'

export const {
	name,
	actions: { updateGlobaVariable, setFetchedData },
	reducer,
} = slice

export const {
	fetchUser,
	uploadImage,
	getUser
  } = asyncActions;

  export const { selectUser } = selectors

// export { Profile }