import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchFromApi = createApi({
  reducerPath: "fetchFromApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "5ea85e5006msh4991aef8c6357f9p1954dajsn414615d81423"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => `charts/world` }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetArtistDetailsQuery } = fetchFromApi;
