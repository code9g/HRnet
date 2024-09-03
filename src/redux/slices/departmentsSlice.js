import { createSlice } from "@reduxjs/toolkit";
import defaultDepartments from "../../data/departments.json";

const departmentsSlice = createSlice({
  name: "departments",
  initialState: defaultDepartments,
  reducers: {},
});

export default departmentsSlice;
