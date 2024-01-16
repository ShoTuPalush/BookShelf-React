import { createSlice } from '@reduxjs/toolkit';
import { createUser, logOut, loginUser, refreshUser } from './operations';

export interface IUser {
  name: string;
  email: string;
}

interface IAuthState {
  user: IUser;
  isLoggenIn: boolean;
  isRefreshing: boolean;
}

const initialState: IAuthState = {
  user: { name: '', email: '' },
  isLoggenIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name as string, email: payload.email as string };
        state.isLoggenIn = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name as string, email: payload.email as string };
        state.isLoggenIn = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload?.name as string, email: payload?.email as string };
        state.isRefreshing = false;
        state.isLoggenIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: '', email: '' };
      });
  },
});

export const authReducer = authSlice.reducer;
