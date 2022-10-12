import React from "react";
import { Navigate } from "react-router-dom";
import { IBoard } from "../../data/type";
import Navigation from "../Navigation";
import Column from "./Column";

interface BoardProps {
  currentBoard: IBoard;
  allBoards: any;
}

const Board = (props: BoardProps) => {
  const { currentBoard, allBoards } = props;

  console.log(currentBoard);
  return (
    <div className={`Board`}>
      <Navigation
        Buttons={[
          {
            text: "HTML",
            boardTab: "HTML",
          },
          {
            text: "CSS",
            boardTab: "CSS",
          },
          {
            text: "Javascript",
            boardTab: "Javascript",
          },

          {
            text: "Reactjs",
          },
          {
            text: "Redux",
          },
        ]}
      />
      <div className="Board__columns">
        {currentBoard?.columns?.map((column, index) => (
          <Column key={column.id} columnData={column} ballColor={index} />
        ))}
      </div>
    </div>
  );
};

export default Board;
