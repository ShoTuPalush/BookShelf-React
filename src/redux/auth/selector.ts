import { RootState } from '../store';

export const selectIsLeggenIn = (state: RootState) => state.auth.isLoggenIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
