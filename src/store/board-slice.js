import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    write: false,
    notes: [],
    editId: "",
  },
  reducers: {
    setWrite(state, action) {
      state.write = action.payload;
    },
    setEditId(state, action) {
      state.editId = action.payload;
    },
    addNote(state, action) {
      state.notes.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        createdDate: action.payload.createdDate,
        modifiedDate: action.payload.modifiedDate,
      });
      state.write = false;
    },
    editNote(state, action) {
      const editNote = state.notes.find(
        (note) => (note.id = action.payload.id)
      );
      editNote.title = action.payload.title;
      editNote.content = action.payload.content;
      editNote.modifiedDate = action.payload.modifiedDate;
      state.write = false;
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
