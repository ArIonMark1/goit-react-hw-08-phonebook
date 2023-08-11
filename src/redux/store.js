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

import { authApiSlice } from './features/authApi/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { tokenReducer } from './features/authApi/tokenSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authToken'],
};

const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  authToken: tokenReducer,
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
