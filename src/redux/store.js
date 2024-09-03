import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./slices/employeesSlice";

const store = configureStore({
  [employeesSlice.name]: employeesSlice.reducer,
});

export default store;
