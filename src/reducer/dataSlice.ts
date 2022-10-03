import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../data/type";
import {
  onEditTopic,
  onGetLocalData,
  onSetBoardStatus,
} from "./actions/dataSliceAction";

export interface DataState {
  data: IBoard[];
}

const initialState: DataState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getLocalData: (state, action) => onGetLocalData(state, action),
    setBoardStatus: (state, action) => onSetBoardStatus(state, action),
    editTopic: (state, action) => onEditTopic(state, action),
  },
});

export const { getLocalData, setBoardStatus, editTopic } = dataSlice.actions;

export default dataSlice.reducer;
