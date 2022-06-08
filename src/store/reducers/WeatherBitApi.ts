import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherBit } from '../../types/WeatherBit';

const WEATHER_BIT_API_KEY = '70c100dd35234454816afc7edc843093';
const WEATHER_BIT_BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/';

export const weatherBitApi = createApi({
  reducerPath: 'weatherBitApi',
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_BIT_BASE_URL }),
  endpoints: (builder) => ({
    getWeatherBit: builder.query<WeatherBit, string>({
      query: (city) => `daily?city=${city.toLowerCase()}&days=7&key=${WEATHER_BIT_API_KEY}`,
    }),
  }),
});

export const { useGetWeatherBitQuery } = weatherBitApi;
