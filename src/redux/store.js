import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApiSlice } from './features/userApi/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authReducer } from './features/userApi/tokenSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [authReducer.name],
};

const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [authReducer.name]: authReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
//
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  authApiSlice.middleware,
];
// ******************************************************************
export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
