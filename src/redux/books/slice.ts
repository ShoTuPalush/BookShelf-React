import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { featchBooks, featchCategories, featchSaveBook, featchTopBooks } from './operations';

export interface IBook {
  [key: string]: any;
}
export interface ITopBooks {
  list_name: string;
  books: IBook[];
}
export type ICategory = Pick<ITopBooks, 'list_name'>;

interface IBooksState {
  books: IBook[];
  topBooks: ITopBooks[];
  saveBooks: IBook[];
  category: ICategory[];
  error: string | null;
  isLoading: boolean;
  selectCategory: string;
}

const initialState: IBooksState = {
  books: [],
  topBooks: [],
  saveBooks: [],
  category: [],
  error: null,
  isLoading: false,
  selectCategory: 'all categories',
};

const handlePending = (state: any) => {
  state.isLoading = true;
};

const handleReject = (state: any, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    clearBook(state) {
      state.books = [];
    },
    setSelect(state, action: PayloadAction<string>) {
      state.selectCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(featchBooks.pending, handlePending)
      .addCase(featchBooks.fulfilled, (state, action: PayloadAction<IBook[]>) => {
        state.books = action.payload;
      })
      .addCase(featchBooks.rejected, handleReject)
      .addCase(featchCategories.pending, handlePending)
      .addCase(featchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
        state.category = action.payload;
        state.isLoading = false;
      })
      .addCase(featchCategories.rejected, handleReject)
      .addCase(featchSaveBook.pending, handlePending)
      .addCase(featchSaveBook.fulfilled, (state, action: PayloadAction<IBook>) => {
        state.saveBooks.push(action.payload);
      })
      .addCase(featchSaveBook.rejected, handleReject)
      .addCase(featchTopBooks.pending, handlePending)
      .addCase(featchTopBooks.fulfilled, (state, action: PayloadAction<ITopBooks[]>) => {
        state.topBooks = action.payload;
      })
      .addCase(featchTopBooks.rejected, handleReject);
  },
});

export const bookReducer = bookSlice.reducer;
export const { clearBook, setSelect } = bookSlice.actions;
