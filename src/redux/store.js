import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contactsAPI';
import { filter } from './reducer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat(contactsApi.middleware),

  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
