import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    city: '',
    userLocation: '',
  },
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    getUserLocation(state, action: PayloadAction<string>) {
      state.userLocation = action.payload;
    },
  },
});

export default userSlice.reducer;
