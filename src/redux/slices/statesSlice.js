import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import defaultStates from "../../data/states.json";

export const statesAdapter = createEntityAdapter({
  selectId: (state) => state.abbreviation,
});

const statesSlice = createSlice({
  name: "states",
  initialState: statesAdapter.getInitialState(
    { lastInsertId: null },
    defaultStates
  ),
  reducers: {},
});

export default statesSlice;
