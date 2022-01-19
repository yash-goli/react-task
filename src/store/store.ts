import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsApi } from "../services/carsApi";

const rootReducer = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(carsApi.middleware)
  });
};

export default setupStore;

