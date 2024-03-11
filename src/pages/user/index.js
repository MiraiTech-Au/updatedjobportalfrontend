import slice from './user.slice'
import * as asyncActions from "./user.action";
import * as selectors from './user.selectors'

export const {
	name,
	actions: { updateFilter },
	reducer,
} = slice

export const {
	fetchUser,
  } = asyncActions;

  export const { selectUser } = selectors