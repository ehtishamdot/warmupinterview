import { configureStore } from "@reduxjs/toolkit";
import boardTopicReducer from "./reducer/boardTopicSlice";
import dataReducer from "./reducer/dataSlice";
import modalReducer from "./reducer/modalSlice";
import questionsReducer from "./reducer/questionsSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    boardTab: boardTopicReducer,
    data: dataReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
