import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "system",
  rowsPerPage: 10,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setTheme: (state, { payload: theme }) => {
      state.theme = theme;
    },
    setRowsPerPage: (state, { payload: rowsPerPage }) => {
      state.rowsPerPage = rowsPerPage;
    },
  },
});

export const { setTheme, setRowsPerPage } = configSlice.actions;

export default configSlice;
