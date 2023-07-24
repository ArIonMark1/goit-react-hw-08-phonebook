import { createSlice } from '@reduxjs/toolkit';
import { userRegister } from './auth-operations';
import { userLogIn } from './auth-operations';
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
  extraReducers: {
    [userRegister.fulfilled](state, { payload: { user, token } }) {
      state.error = null;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [userRegister.rejected](state, action) {
      state.error = action.payload;
    },
    [userLogIn.fulfilled](state, { payload: { user, token } }) {
      state.error = null;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [userLogIn.rejected](state, action) {
      // state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});
// ********************************
export const authReducer = authSlice.reducer;
// export default authSlice.reducer;
