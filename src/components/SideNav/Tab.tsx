import React from "react";
import { IconBoard } from "../../data/icons";
import { ITab } from "../../data/type";

const Tab: React.FC<ITab> = (props) => {
  const { tab, addNew, defaultTab } = props;

  if (addNew) {
    return (
      <button className="SideNav__tab SideNav__tab--addNew">
        <IconBoard />+ Create New Board
      </button>
    );
  }

  return (
    <button
      className={`SideNav__tab ${defaultTab ? "SideNav__tab--active" : ""}`}
    >
      <IconBoard />
      {tab}
    </button>
  );
};

export default Tab;
