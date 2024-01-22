import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { featchBook, featchBooks, featchCategories, featchTopBooks } from './operations';

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
  category: ICategory[];
  error: string | null;
  isLoading: boolean;
  selectCategory: string;
  selectBook: IBook;
}

const initialState: IBooksState = {
  books: [],
  topBooks: [],
  category: [],
  selectBook: {},
  error: null,
  isLoading: false,
  selectCategory: 'All categories',
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
      .addCase(featchBooks.pending, (state: any) => {
        state.books = [];
        state.isLoading = true;
      })
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
      .addCase(featchBook.pending, (state) => {
        state.isLoading = true;
        state.selectBook = {};
      })
      .addCase(featchBook.fulfilled, (state, action: PayloadAction<IBook>) => {
        state.selectBook = action.payload;
      })
      .addCase(featchBook.rejected, handleReject)
      .addCase(featchTopBooks.pending, handlePending)
      .addCase(featchTopBooks.fulfilled, (state, action: PayloadAction<ITopBooks[]>) => {
        state.topBooks = action.payload;
      })
      .addCase(featchTopBooks.rejected, handleReject);
  },
});

export const bookReducer = bookSlice.reducer;
export const { clearBook, setSelect } = bookSlice.actions;
