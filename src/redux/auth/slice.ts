import { createSlice } from '@reduxjs/toolkit';
import { createUser, logOut, loginUser, refreshUser } from './operations';

export interface IUser {
  uid: string;
  name: string;
  email: string;
}

interface IAuthState {
  user: IUser;
  isLoggenIn: boolean;
  isRefreshing: boolean;
}

const initialState: IAuthState = {
  user: { uid: '', name: '', email: '' },
  isLoggenIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.user = { uid: payload.uid, name: payload.name as string, email: payload.email as string };
        state.isLoggenIn = true;
        state.isRefreshing = false;
      })
      .addCase(createUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { uid: payload.uid, name: payload.name as string, email: payload.email as string };
        state.isLoggenIn = true;
        state.isRefreshing = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { uid: payload?.uid, name: payload?.name as string, email: payload?.email as string };
        state.isRefreshing = false;
        if (payload.email?.length) {
          state.isLoggenIn = true;
        } else state.isLoggenIn = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { uid: '', name: '', email: '' };
        state.isLoggenIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
