import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([]),
	devTools: true,
});
setupListeners(store.dispatch);
export default store;
