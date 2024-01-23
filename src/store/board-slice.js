import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    edit: false,
  },
  reducers: {
    setEdit(state, action) {
      state.edit = action.payload;
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
