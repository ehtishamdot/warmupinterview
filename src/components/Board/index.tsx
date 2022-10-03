import React from "react";
import { IBoard } from "../../data/type";
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
      {currentBoard?.columns?.map((column, index) => (
        <Column key={column.id} columnData={column} ballColor={index} />
      ))}
    </div>
  );
};

export default Board;
