import { createSlice } from "@reduxjs/toolkit";

const initialToDoModalState = {
  isShowDeleteModal: false,
};

const toDoModalSlice = createSlice({
  name: "modal",
  initialState: initialToDoModalState,
  reducers: {
    showDeleteModal: (state) => {
      state.isShowDeleteModal = true;
    },
    hideDeleteModal: (state) => {
      state.isShowDeleteModal = false;
    },
  },
});

export const modalActions = toDoModalSlice.actions;
export default toDoModalSlice.reducer;
