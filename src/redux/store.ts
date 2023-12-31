import {
  configureStore,
  type ThunkAction,
  type Action
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/auth';
import settingsReducer from './slices/settings';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'], // lo que queremos que se guarden
  blacklist: ['loQueNoQuiero'] // Lo que no quiero que se guarde
};

const persistSettingsConfig = {
  key: 'settings',
  storage,
  whitelist: ['themeMode'], // lo que queremos que se guarden
  blacklist: ['loQueNoQuiero'] // Lo que no quiero que se guarde
};

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    ),
    settings: persistReducer<ReturnType<typeof settingsReducer>>(
      persistSettingsConfig,
      settingsReducer
    )
    // auth: authReducer
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);

export default store;
