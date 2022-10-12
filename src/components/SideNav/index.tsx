import React from "react";
import Tab from "./Tab";

const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="SideNav__top">
        <div className="SideNav__head">ALL BOARDS {0}</div>
        <div>
          <Tab defaultTab={true} tab={"Frontend Dev"} />
          <Tab defaultTab={false} tab={"Backend Dev"} />
        </div>
        <Tab addNew />
      </div>
      <div className="SideNav__bottom"></div>
    </div>
  );
};

export default SideNav;
