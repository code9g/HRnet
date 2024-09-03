import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./slices/employeesSlice";

const store = configureStore({
  reducer: {
    [employeesSlice.name]: employeesSlice.reducer,
  },
});

export default store;
