import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import departmentsSlice from "./slices/departmentsSlice";
import employeesSlice from "./slices/employeesSlice";
import statesSlice from "./slices/statesSlice";

const persistConfig = {
  key: "hrnet",
  storage,
  blacklist: [departmentsSlice.name, statesSlice.name],
};

const rootReducer = combineReducers({
  [employeesSlice.name]: employeesSlice.reducer,
  [statesSlice.name]: statesSlice.reducer,
  [departmentsSlice.name]: departmentsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
