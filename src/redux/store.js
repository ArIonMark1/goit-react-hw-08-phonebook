import { configureStore } from '@reduxjs/toolkit';
import { contactSliceReducer } from './contacts/contactsSlice';
import { filterContactReduser } from './contacts/filterSlice';
import { authReducer } from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactSliceReducer,
    filters: filterContactReduser,
  },
});
