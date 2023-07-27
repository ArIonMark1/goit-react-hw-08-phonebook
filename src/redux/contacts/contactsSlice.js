import { createSlice } from '@reduxjs/toolkit';
import { getContactList, createContacts, deleteContacts } from './operations';

const initContactState = {
  //  { "name": "Jacob Mercer", "number": "761-23-96" }
  items: [], // стейт це об'єкт, дааний кусок стейту буде записаний як значення ключа "contacts" у головному стейті
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  // приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.
  name: 'contacts',
  initialState: initContactState,
  /*
Генератори екшенів, які мають життєвий цикл запиту, 
зберігаються в об'єкті операції як властивості pending, fulfilled та rejected. 
Вони автоматично створюються за допомогою createAction 
і тому мають властивість !!!type!!! і перевизначений метод !!!toString()!!!, 
який повертає рядок типу екшену.
*/
  extraReducers: builder =>
    builder
      .addCase(getContactList.pending, state => {
        state.isLoading = true;
      })
      .addCase(createContacts.pending, state => {
        state.isLoading = true;
      })
      // ****************************************************************
      .addCase(getContactList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(createContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      // ****************************************************************
      .addCase(getContactList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const contactSliceReducer = contactSlice.reducer;

// ----------------------------------------------------------------
