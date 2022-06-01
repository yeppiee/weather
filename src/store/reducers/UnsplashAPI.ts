import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.unsplash.com/search/';
const ACCESS_KEY = 'DON2j_WwiFgfpZpAs8GcG5MrGG1E9ZcVcjhJW-5yaf8';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getImg: builder.query({
      query: (weather) => `photos?query=${weather}&client_id=${ACCESS_KEY}`,
    }),
  }),
});

export const { useGetImgQuery } = unsplashApi;
