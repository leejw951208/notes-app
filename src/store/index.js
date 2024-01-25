import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./board-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: { board: boardSlice.reducer, search: searchSlice.reducer },
});

export default store;
