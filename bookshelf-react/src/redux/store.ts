import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './books/slice';
import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
