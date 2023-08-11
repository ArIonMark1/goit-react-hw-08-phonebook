// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // =================================================================

// export const getContactList = createAsyncThunk(
//   'contacts/getContacts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       // console.log('Get current state from contact list ', thunkAPI.getState());
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.error);
//     }
//   }
// );

// // =================================================================
// export const createContacts = createAsyncThunk(
//   'contacts/createContacts',
//   async (contactData, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contactData);
//       return response.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.response.message);
//     }
//   }
// );
// // =================================================================
// // export const createContacts = createAsyncThunk(
// //   'contacts/createContacts',
// //   async (params, thunkAPI) => {
// //     // як можна отримати більше одного аргументу іншим чином????
// //     try {
// //       const response = await axios.post('/contacts', params);
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );
// // =================================================================
// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (id, thunkAPI) => {
//     // видаляємо об'єкт контакту по ID
//     try {
//       const deletedContact = await axios.delete(`/contacts/${id}`);
//       return deletedContact.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.message);
//     }
//   }
// );
