import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import { openWeatherApi } from './reducers/OpenWeatherApi';
import { unsplashApi } from './reducers/UnsplashAPI';
import userSlice from './reducers/UserSlice';
import { weatherBitApi } from './reducers/WeatherBitApi';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userSlice,
  [openWeatherApi.reducerPath]: openWeatherApi.reducer,
  [weatherBitApi.reducerPath]: weatherBitApi.reducer,
  [unsplashApi.reducerPath]: unsplashApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
    .concat(openWeatherApi.middleware)
    .concat(weatherBitApi.middleware)
    .concat(unsplashApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
