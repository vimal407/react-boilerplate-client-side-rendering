import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const persistConfig = {
  timeout: 5,
  key: 'root',
  version: 1,
  storage: localStorage,
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
