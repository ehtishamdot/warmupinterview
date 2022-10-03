import React, { useEffect } from "react";
import Button from "../../standard/Button";
import DropDown from "../../standard/DropDown";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { setQuestions } from "../../reducer/questionsSlice";

const Launch = () => {
  const dispatch = useAppDispatch();

  const getJsonData = async () => {
    const data = await import("../../data/data.json");
    const selectedColumn = data.boards[0].columns;

    let interviewData: Array<object> = [];

    const val = `for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }`;

    console.log(JSON.stringify(val));

    selectedColumn.forEach((item) => [
      item.tasks.forEach((task) => {
        interviewData.push(
          ...task.subtasks.filter((task) => task.isCompleted === true)
        );
      }),
    ]);

    dispatch(setQuestions(interviewData));
  };

  console.log(
    JSON.stringify(`const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
  console.log(shape.diameter());
  console.log(shape.perimeter());`)
  );

  return (
    <div className="Launch">
      <h1 className="Launch__title">Platform Launch</h1>
      <div className="Launch__buttons">
        <Link to={"interview"}>
          <Button
            onClick={() => {
              getJsonData();
            }}
          >
            &nbsp; Start Quiz &nbsp; → &nbsp;
          </Button>
        </Link>
        <DropDown />
      </div>
    </div>
  );
};

export default Launch;
