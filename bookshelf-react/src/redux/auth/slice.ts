import { createSlice } from '@reduxjs/toolkit';
import { createUser } from './operations';

export interface IUser {
  name: string;
  email: string;
}

interface IAuthState {
  user: IUser;
  token: string;
  isLoggenIn: boolean;
  isRefreshing: boolean;
}

const initialState: IAuthState = {
  user: { name: '', email: '' },
  token: '',
  isLoggenIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const authReducer = authSlice.reducer;
