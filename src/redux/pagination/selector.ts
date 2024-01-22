import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IBook } from '../books/slice';

export const selectSaveBooks = (state: RootState) => state.pagination.saveBooks;

export const selectPage = (state: RootState) => state.pagination.page;

export const selectStep = (state: RootState) => state.pagination.step;

export const selectPaginBooks = createSelector([selectSaveBooks, selectPage, selectStep], (saveBooks, page, step) => {
  let newArr: IBook[] = [];
  if (saveBooks.length > 0) {
    newArr = saveBooks.slice((page - 1) * step, page * step);
  }
  return newArr;
});

export const selectMaxPage = createSelector([selectSaveBooks, selectPage, selectStep], (saveBooks, page, step) => {
  let arrPage: number[] = [];
  const maxPage = Math.ceil(saveBooks.length / step);
  if (maxPage !== 0) {
    if (page === 1) {
      for (let index = 1; index <= maxPage; index++) {
        arrPage.push(index);
      }
    } else if (page === maxPage) {
      if (maxPage === 2) {
        for (let index = 1; index >= 0; index--) {
          arrPage.push(maxPage - index);
        }
      } else {
        for (let index = 2; index >= 0; index--) {
          arrPage.push(maxPage - index);
        }
      }
    } else if (page > 1 && page < maxPage) {
      arrPage.push(page - 1);
      arrPage.push(page);
      arrPage.push(page + 1);
    }
  }
  return arrPage;
});
