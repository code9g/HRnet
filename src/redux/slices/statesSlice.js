import { createSlice } from "@reduxjs/toolkit";
import defaultStates from "../../data/states.json";

const statesSlice = createSlice({
  name: "states",
  initialState: defaultStates,
  reducers: {},
});

export default statesSlice;
