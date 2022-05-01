import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserGeoLocation } from '../../types/User';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    city: '',
    requestCity: '',
    userGeoLocation: {
      lat: 0,
      lon: 0,
    },
    userCity: '',
  },
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    changeRequestCity(state, action: PayloadAction<string>) {
      state.requestCity = action.payload;
    },
    changeUserCity(state, action: PayloadAction<string>) {
      state.userCity = action.payload;
    },
    getUserGeoLocation(state, action: PayloadAction<UserGeoLocation>) {
      state.userGeoLocation = action.payload;
    },
  },
});

export default userSlice.reducer;
