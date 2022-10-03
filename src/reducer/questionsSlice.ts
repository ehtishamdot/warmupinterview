import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQuestions } = questionSlice.actions;

export default questionSlice.reducer;
