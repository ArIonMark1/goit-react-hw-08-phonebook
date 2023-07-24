import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// --------------------------------------------------------------
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// --------------------------------------------------------------

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// =================================================================
export const userRegister = createAsyncThunk(
  'auth-user/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// =================================================================
export const userLogIn = createAsyncThunk(
  'auth-user/logIn',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// =================================================================
// export const userLogOut = createAsyncThunk(
//   'auth-user/logOut',
//   async (token, thunkAPI) => {
//     try {
//       await axios.post('/users/logout', token);
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// =================================================================
export const userLogOut = createAsyncThunk(
  'auth-user/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// =================================================================
