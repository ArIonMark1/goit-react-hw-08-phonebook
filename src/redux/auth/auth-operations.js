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
      console.log('Registration userData: ', userData);
      const response = await axios.post('/users/signup', userData);
      // response: {data: [], token:'token'}
      token.set(response.data.token); // put the token in the request header
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
      console.log('response: ', response);

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
/*
 * Забираємо токен зі стейту через getState()
 * Якщо токена немає виходимо не виконуючи ніяких операцій
 * Якщо токен маємо, додаємо його в HTTP-заголовок і виконуємо операцію
 */
export const fetchCurrentUser = createAsyncThunk(
  'auth-user/refresh',
  async (_, thunkAPI) => {
    // ****************************************
    const sessionState = thunkAPI.getState();
    const sessionToken = sessionState.auth.token;
    // ****************************************
    if (!sessionToken) {
      return thunkAPI.rejectWithValue(null);
    }
    token.set(sessionToken);
    try {
      const response = await axios.get('/users/current');
      console.log('Return refresh data: ', response.data);
      return response.data; // { name: 'Mango', email: 'abc@example.com' }
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
