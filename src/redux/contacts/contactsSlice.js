import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, createContacts, deleteContacts } from './operations';

const initContactState = {
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

  extraReducers: {
    // завантаження усіх даних контактів з бекенду
    // --------------------------------------------
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // --------------------------------------------
    /*
    Додавання нового контакту в бекенд.
    За створення унікального ідентифікатора 
    та додавання властивості completed відповідатиме бекенд.
    */
    // --------------------------------------------
    [createContacts.pending](state, action) {
      state.isLoading = true;
    },
    [createContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [createContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // --------------------------------------------
    // видалення контакту з бекенду
    // --------------------------------------------
    [deleteContacts.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const newList = state.items.filter(
        contact => contact.id !== action.payload.id
      ); // при фільтрації стейт не перерендериться(генерує новий масив, проходячи по стейту та ігноруючи співпадіння)
      state.items = newList; // потрібно явно переписати список контактів(, важкість вичеслення On)

      // ********************************************
      // 1. проходимо по списку щоб знайти перше співпадіння(не перебирає до кінця, зупиниться при співпадінні)
      // 2. по даних які знайшли видаляємо точково елемент
      // --------------------------------
      // ********************************************
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // --------------------------------------------
  },
});

export const contactSliceReducer = contactSlice.reducer;

// ----------------------------------------------------------------
