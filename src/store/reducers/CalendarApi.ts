import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CalendarResponse } from '../../types/Calendar';

const API_KEY = '82e6034c8b60d5bd9755716b9ce8d52f5aa1f468';
const BASE_URL = 'https://calendarific.com/api/v2';

export const calendarApi = createApi({
  reducerPath: 'calendarApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getHolidays: builder.query<CalendarResponse, string>({
      query: (date) => {
        const year = date.slice(-4);
        const month = date.slice(-7, -5);
        return `holidays?&api_key=${API_KEY}&country=BY&year=${year}&month=${month}`;
      },
    }),
  }),
});

export const { useGetHolidaysQuery } = calendarApi;
