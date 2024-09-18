import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "system",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setTheme: (state, { payload: theme }) => {
      state.theme = theme;
    },
  },
});

export const { setTheme } = configSlice.actions;

export default configSlice;
