import React from "react";
import { IconEllipsis } from "../data/icons";

const DropDown = () => {
  return (
    <div className="DropDown">
      <button className="DropDown__button-ellipsis">
        <IconEllipsis />
      </button>
      <div className="DropDown__wrapper">
        <button className="DropDown__text">Edit Board</button>
        <button className="DropDown__text DropDown__text--warning">
          Delete Board
        </button>
      </div>
    </div>
  );
};

export default DropDown;
