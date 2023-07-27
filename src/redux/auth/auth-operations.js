import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// --------------------------------------------------------------
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// --------------------------------------------------------------
// ****************************************************************
// ****************************************************************

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// fetch(url, {
//   method: 'POST',
//   header: {
//     Authorization: `Bearer ${token}`,
//   },
// });
// =================================================================
export const userRegister = createAsyncThunk(
  'auth-user/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      // response: {data: [], token:'token'}
      token.set(response.data.token); // put the token in the request header
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Authorization: 'Bearer token'
// =================================================================
export const userLogIn = createAsyncThunk(
  'auth-user/logIn',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      console.log();
      token.set(response.data.token); // put the token in the request header
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// =================================================================
export const userLogOut = createAsyncThunk(
  'auth-user/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// =================================================================
