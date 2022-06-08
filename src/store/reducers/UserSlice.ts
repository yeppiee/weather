import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserGeoLocation } from '../../types/User';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    city: '',
    requestCity: '',
    userCity: '',
    imgNum: 0,
    freezeDate: 0,
    dateObject: new Date().toLocaleDateString(),
    api: 'OpenWeather',
    cityGeoLocation: {
      lat: 0,
      lon: 0,
    },
    userGeoLocation: {
      lat: 0,
      lon: 0,
    },
  },
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    changeApi(state, action: PayloadAction<string>) {
      state.api = action.payload;
    },
    changeDateObject(state, action: PayloadAction<string>) {
      state.dateObject = action.payload;
    },
    changeImgNum(state, action: PayloadAction<number>) {
      state.imgNum = action.payload;
    },
    changeRequestCity(state, action: PayloadAction<string>) {
      state.requestCity = action.payload;
    },
    changeUserCity(state, action: PayloadAction<string>) {
      state.userCity = action.payload;
    },
    getCityGeoLocation(state, action: PayloadAction<UserGeoLocation>) {
      state.cityGeoLocation = action.payload;
    },
    getUserGeoLocation(state, action: PayloadAction<UserGeoLocation>) {
      state.userGeoLocation = action.payload;
    },
    getFreezeDate(state, action: PayloadAction<number>) {
      state.freezeDate = action.payload;
    },
  },
});

export default userSlice.reducer;
