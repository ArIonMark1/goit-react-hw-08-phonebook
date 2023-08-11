import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const authReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: state => {
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authReducer.actions;
export const tokenReducer = authReducer.reducer;
