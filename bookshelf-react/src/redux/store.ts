import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './books/slice';
import { authReducer } from './auth/slice';

// user {
// }

// save book{
// }

export const store = configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
