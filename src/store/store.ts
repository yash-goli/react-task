import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "../services/carsApi";

export default configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(carsApi.middleware)
});