import { createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit";

export const employeesAdapter = createEntityAdapter();

const employeesSlice = createSlice({
  name: "employees",
  initialState: employeesAdapter.getInitialState({ lastInsertId: null }),
  reducers: {
    createEmployee: (state, action) => {
      const id = nanoid();
      state.lastInsertId = id;
      action.payload.id = id;
      return employeesAdapter.addOne(state, action);
    },
    updateEmployee: employeesAdapter.setOne,
    deleteEmployee: employeesAdapter.removeOne,
  },
});

export const { testEmployee, createEmployee, updateEmployee, deleteEmployee } =
  employeesSlice.actions;

export default employeesSlice;
