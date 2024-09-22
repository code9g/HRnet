import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import configSlice from "./slices/configSlice";
import departmentsSlice from "./slices/departmentsSlice";
import employeesSlice from "./slices/employeesSlice";
import statesSlice from "./slices/statesSlice";

const persistConfig = {
  key: "hrnet",
  storage,
  blacklist: [departmentsSlice.name, statesSlice.name],
};

const combineSlices = (...slices) =>
  combineReducers(
    slices.reduce(
      (acc, current) => ({ ...acc, [current.name]: current.reducer }),
      {}
    )
  );

const rootReducer = combineSlices(
  employeesSlice,
  statesSlice,
  departmentsSlice,
  configSlice
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
