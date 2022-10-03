import React from "react";
import { IColumn } from "../../data/type";
import Card from "./Card";

interface ColumnType {
  columnData: IColumn;
  ballColor: number;
}

const Column = ({ columnData, ballColor }: ColumnType) => {
  return (
    <div className={`Column`}>
      {/* title */}
      <div className="Column__title">
        <span
          className={`Column__title-ball Column__title-ball--${ballColor}`}
        ></span>
        <span className="column__title-text">{`Now(${0})`}</span>
      </div>
      {/* container */}
      <div className="Column__container">
        {columnData?.tasks?.map((task) => (
          <Card cardData={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Column;
