import { createSlice } from '@reduxjs/toolkit';

const filterContactState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterContactState,
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterContactReduser = filterSlice.reducer;
