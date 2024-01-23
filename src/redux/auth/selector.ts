import { RootState } from '../store';

export const selectIsLeggenIn = (state: RootState) => state.auth.isLoggenIn;
