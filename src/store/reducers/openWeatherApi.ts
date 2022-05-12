import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserGeoLocation } from '../../types/User';
import { OpenWeatherData, OpenWeatherGeoResponse } from '../../types/OpenWeather';

const OPEN_WEATHER_API_KEY = '4d466002d1f5611fd08f865f84a5f135';
const BASE_OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/';

export const openWeatherApi = createApi({
  reducerPath: 'openWeatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_OPEN_WEATHER_URL }),
  endpoints: (builder) => ({
    getCityByGeoLocation: builder.query<OpenWeatherData, UserGeoLocation>({
      query: ({ lat, lon }) => `weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`,
    }),
    getWeatherByGeoLocation: builder.query<OpenWeatherGeoResponse, UserGeoLocation>({
      query: ({ lat, lon }) => `onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${OPEN_WEATHER_API_KEY}`,
    }),
    getByCityName: builder.query<OpenWeatherData, string>({
      query: (city) => `weather?q=${city.toLowerCase() || 'minsk'}&appid=${OPEN_WEATHER_API_KEY}`,
    }),
  }),
});

export const {
  useGetCityByGeoLocationQuery, useGetByCityNameQuery, useGetWeatherByGeoLocationQuery,
} = openWeatherApi;
