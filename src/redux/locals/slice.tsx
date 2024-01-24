import { createSlice } from '@reduxjs/toolkit';

interface ILocalsState {
  theme: 'light' | 'dark';
}

const initialState: ILocalsState = {
  theme: 'light',
};

const localsSlice = createSlice({
  name: 'locals',
  initialState,
  reducers: {
    toogleTheme(state) {
      if (state.theme === 'dark') {
        state.theme = 'light';
      } else state.theme = 'dark';
      document.documentElement.className = state.theme;
    },
    initialTheme(state) {
      document.documentElement.className = state.theme;
    },
  },
});

export const localsReducer = localsSlice.reducer;
export const { toogleTheme, initialTheme } = localsSlice.actions;
