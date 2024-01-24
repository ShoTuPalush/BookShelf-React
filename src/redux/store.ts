import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './books/slice';
import { authReducer } from './auth/slice';
import { paginationReducer } from './pagination/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { localsReducer } from './locals/slice';

const persistBooksConfig = {
  key: 'books',
  storage,
  whitelist: ['saveBooks'],
};

const persistLocalsConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  pagination: persistReducer(persistBooksConfig, paginationReducer),
  locals: persistReducer(persistLocalsConfig, localsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
