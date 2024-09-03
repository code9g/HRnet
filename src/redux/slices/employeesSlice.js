import { createSlice, nanoid } from "@reduxjs/toolkit";
import defaultEmployees from "../../data/employees.json";

const employeesSlice = createSlice({
  name: "employees",
  initialState: defaultEmployees,
  reducers: {
    createEmployee: (state, action) => {
      state.push({ ...action.payload, id: nanoid() });
    },
  },
});

export default employeesSlice;
