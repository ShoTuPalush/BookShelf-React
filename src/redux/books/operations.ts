import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IBook, ITopBooks } from './slice';
import { ICategory } from './slice';

axios.defaults.baseURL = 'https://books-backend.p.goit.global';

export const featchBooks = createAsyncThunk('book/featchBooks', async (category: string, thunkApi) => {
  try {
    const params = {
      category: category,
    };
    const res = await axios.get('/books/category', { params });
    return res.data as IBook[];
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const featchCategories = createAsyncThunk('book/featchCategories', async (_, thunkApi) => {
  try {
    const res = await axios.get('/books/category-list');
    return res.data as ICategory[];
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const featchBook = createAsyncThunk('book/featchBook', async (id: string, thunkApi) => {
  try {
    const res = await axios.get(`/books/${id}`);
    return res.data as IBook;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const featchTopBooks = createAsyncThunk('book/featchTopBooks', async (_, thunkApi) => {
  try {
    const res = await axios.get('/books/top-books');
    return res.data as ITopBooks[];
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
