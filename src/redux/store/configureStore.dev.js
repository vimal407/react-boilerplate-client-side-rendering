import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import { createLogger } from 'redux-logger';
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

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const persistConfig = {
  timeout: 5,
  key: 'root',
  version: 1,
  storage: localStorage,
  debug: true,
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
    }).concat(loggerMiddleware),
  devTools: true,
});
