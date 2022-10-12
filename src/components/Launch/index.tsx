import React, { useEffect } from "react";
import Button from "../../standard/Button";
import DropDown from "../../standard/DropDown";
import { Link } from "react-router-dom";
import { setQuestions } from "../../reducer/questionsSlice";
import { useAppSelector } from "../../hooks/useRedux";

const Launch = () => {
  const boardTab = useAppSelector((state) => state.boardTab);

  return (
    <div className="Launch">
      <h1 className="Launch__title">{boardTab}</h1>
      <div className="Launch__buttons">
        <Link to={"interview"}>
          <Button>&nbsp; Start Quiz &nbsp; → &nbsp;</Button>
        </Link>
        <DropDown />
      </div>
    </div>
  );
};

export default Launch;
