import { combineReducers } from 'redux'
import * as users from './pages/user'
import * as login from './pages/login'
import * as profile from './pages/profile'
import * as Alert from "./components/organisms/Alert";
import * as Spinner from "./components/organisms/Spinner";
import * as AwaitedRequests from "./infrastructure/awaitedRequests";


export default combineReducers({
	[users.name]: users.reducer,
	[profile.name]: profile.reducer,
	[login.name]: login.reducer,
	[Alert.name]: Alert.reducer,
	[Spinner.name]: Spinner.reducer,
	[AwaitedRequests.name]: AwaitedRequests.reducer,
})