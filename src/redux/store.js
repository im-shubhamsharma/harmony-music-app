import { configureStore } from "@reduxjs/toolkit";
import { fetchFromApi } from "./fetchFromAPI";

export const store = configureStore({
  reducer: {
    [fetchFromApi.reducerPath]: fetchFromApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchFromApi.middleware),
});
