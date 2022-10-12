import { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import Modals from "./components/Modals";
import { useAppDispatch } from "./hooks/useRedux";
import Dashboard from "./layout/Dashboard";
import Interview from "./layout/Interview";
import { setTopic } from "./reducer/boardTopicSlice";
import { getLocalData, setBoardStatus } from "./reducer/dataSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await import("./data/data.json");
      dispatch(getLocalData(data.boards));
      dispatch(setBoardStatus(data.boards[1].name));
      dispatch(setTopic(data.boards[1].name));
    };

    getData();
  }, []);

  return (
    <div className="App dark">
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Modals />
    </div>
  );
};

export default App;
