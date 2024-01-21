import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ITopBooks } from './slice';

export const selectBooks = (state: RootState) => state.books.books;

export const selectCategory = (state: RootState) => state.books.category;

export const selectSaveBooks = (state: RootState) => state.books.saveBooks;

export const selectBook = (state: RootState) => state.books.selectBook;

export const selectTopBooks = (state: RootState) => state.books.topBooks;

export const selectChangeCategory = (state: RootState) => state.books.selectCategory;

export const selectError = (state: RootState) => state.books.error;

export const selectIsLoading = (state: RootState) => state.books.isLoading;

export const selectSortedTopBooks = createSelector([selectCategory, selectTopBooks], (category, topBooks) => {
  let newArr: ITopBooks[] = [];
  category.map((category) =>
    newArr.push(topBooks.find((topBook) => topBook.list_name === category.list_name) as ITopBooks),
  );
  return newArr;
});
