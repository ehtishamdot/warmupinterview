import { AnyAction, current } from "@reduxjs/toolkit";
import { DataState } from "../dataSlice";
import produce from "immer";

export const onGetLocalData = (state: DataState, action: AnyAction) => {
  console.log(action.payload);
  return { ...state, data: action.payload };
};

export const onSetBoardStatus = (state: DataState, action: AnyAction) => {
  // const data = current(state.data);
  // const currentBoardTab = action.payload;
  // const targetBoard = data.find((item) => item.name === currentBoardTab);
  // console.log(targetBoard);
  // return { ...state, currentBoardTab: targetBoard };
};

export const onEditTopic = (state: DataState, action: AnyAction) => {
  const { newTopic, BoardTab } = action.payload;
  const data = current(state.data);
  const currentBoardIndex = data!.findIndex((item) => item.name === BoardTab);
  const currentColumnIndexOfBoard = data[currentBoardIndex].columns!.findIndex(
    (item) => item.name === newTopic.status
  );

  const currentTaskIndexOfColumn = data![currentBoardIndex].columns![
    currentColumnIndexOfBoard
  ].tasks!.findIndex((item) => item.id === newTopic.id);

  const newState = produce(data, (draft: any) => {
    draft![currentBoardIndex].columns![currentColumnIndexOfBoard].tasks![
      currentTaskIndexOfColumn
    ] = newTopic;
  });

  console.log(newState);

  return { ...state, data: newState };
};
