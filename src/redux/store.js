import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "./slices/departmentsSlice";
import employeesSlice from "./slices/employeesSlice";
import statesSlice from "./slices/statesSlice";

const store = configureStore({
  reducer: {
    [employeesSlice.name]: employeesSlice.reducer,
    [statesSlice.name]: statesSlice.reducer,
    [departmentsSlice.name]: departmentsSlice.reducer,
  },
  devTools: import.meta.env.DEV,
});

export default store;
