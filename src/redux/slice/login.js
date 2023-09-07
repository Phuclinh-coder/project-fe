import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'login';

const initialState = {
	token: '',
	user: null,
};
const userSlice = createSlice({
	name,
	initialState,
	reducers: {
		login: (state, action) => {
			state.token = action.payload;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		logout: state => {
			state.token = '';
			state.user = null;
		},
	},
});

const selector = state => state[name];

const currentUser = createSelector(selector, ({ user }) => user);
const currentToken = createSelector(selector, ({ token }) => token);

export const loginSelector = { currentUser, currentToken };

const { login, setUser, logout } = userSlice.actions;

export const loginActions = { login, setUser, logout };

export default userSlice.reducer;
