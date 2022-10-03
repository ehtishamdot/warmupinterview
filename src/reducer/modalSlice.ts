import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModal } from "../data/type";

const initialState = {
  ModalType: "",
  ModalDetail: "",
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModal>) => {
      return { ...state, ...action.payload };
    },
    closeModal: (state) => {
      return {
        ...state,
        ModalType: "",
      };
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
