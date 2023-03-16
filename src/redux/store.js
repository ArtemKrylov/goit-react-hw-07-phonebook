import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filterSlice';

const contactsReducerConfig = {
  key: 'contacts',
  storage,
  whitelist: ['data'],
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: persistReducer(contactsReducerConfig, contactsReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
