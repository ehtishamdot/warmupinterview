import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const boardTopicSlice = createSlice({
  name: "boardTopic",
  initialState,
  reducers: {
    setTopic: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTopic } = boardTopicSlice.actions;

export default boardTopicSlice.reducer;
