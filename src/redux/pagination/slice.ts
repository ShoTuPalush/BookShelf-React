import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../books/slice';

interface IBooksState {
  saveBooks: IBook[];
  page: number;
  step: number;
}

const initialState: IBooksState = {
  saveBooks: [],
  page: 1,
  step: 3,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    addSaveBook(state, action) {
      const index = state.saveBooks.findIndex((book) => book._id === action.payload._id);
      if (index === -1) {
        state.saveBooks.push(action.payload);
      }
    },
    removeSaveBook(state, action) {
      const index = state.saveBooks.findIndex((book) => book._id === action.payload._id);
      if (index !== -1) {
        state.saveBooks.splice(index, 1);
      }
      if (Math.ceil(state.saveBooks.length / state.step) < state.page) {
        if (state.page !== 1) {
          state.page = state.page - 1;
        }
      }
    },
    choosePage(state, action) {
      switch (action.payload) {
        case '<<':
          state.page = 1;
          break;
        case '<':
          if (state.page > 1) {
            state.page = state.page - 1;
          }
          break;
        case '>':
          if (state.page < Math.ceil(state.saveBooks.length / state.step)) {
            state.page = state.page + 1;
          }
          break;
        case '>>':
          state.page = Math.ceil(state.saveBooks.length / state.step);
          break;
        default:
          state.page = action.payload;
          break;
      }
    },
    clearSaveBooks(state) {
      state.saveBooks = [];
    },
  },
});

export const paginationReducer = paginationSlice.reducer;
export const { addSaveBook, removeSaveBook, choosePage, clearSaveBooks } = paginationSlice.actions;
