import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { keyword: "", sort: "modified" },
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
