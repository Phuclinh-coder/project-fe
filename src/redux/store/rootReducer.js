import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '../slice/login';

export default combineReducers({
	login: loginReducer,
});
