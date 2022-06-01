import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '82e6034c8b60d5bd9755716b9ce8d52f5aa1f468';
const BASE_URL = 'https://calendarific.com/api/v2';

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getHolidays: builder.query({
      query: () => `holidays?&api_key=${API_KEY}&country=BY&year=2022&month=5`,
    }),
  }),
});

export const { useGetHolidaysQuery } = calendarApi;
