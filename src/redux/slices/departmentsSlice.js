import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import defaultDepartments from "../../data/departments.json";

export const departmentsAdapter = createEntityAdapter();

const departmentsSlice = createSlice({
  name: "departments",
  initialState: departmentsAdapter.getInitialState(
    { lastInsertId: null },
    defaultDepartments
  ),
  reducers: {},
});

export default departmentsSlice;
