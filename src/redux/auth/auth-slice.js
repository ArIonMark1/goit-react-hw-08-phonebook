import { createSlice } from '@reduxjs/toolkit';
import { userRegister } from './auth-operations';
import { userLogIn } from './auth-operations';
import { userLogOut } from './auth-operations';
// const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  //   isRefreshing: false,
};
// ********************************
const authSlice = createSlice({
  name: 'auth-user',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(userRegister.pending, state => state)
      .addCase(userLogIn.pending, state => state)
      .addCase(userLogOut.pending, state => state)
      // =================================================================
      .addCase(
        userRegister.fulfilled,
        (state, { payload: { user, token } }) => {
          state.error = null;
          state.user = user;
          state.token = token;
          state.isLoggedIn = true;
        }
      )
      .addCase(userLogIn.fulfilled, (state, { payload: { user, token } }) => {
        state.error = null;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      // =================================================================
      .addCase(userRegister.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.error = action.payload;
      }),
});
// ********************************
export const authReducer = authSlice.reducer;
