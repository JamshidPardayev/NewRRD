import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Group = () => {
  return (
    <div className="">
      <div className="flex gap-6">
        <NavLink to={""} end={true} className={"groupLink"}>
          Group 1
        </NavLink>
        <NavLink to={"group2"} className={"groupLink"}>
          Group 2
        </NavLink>
        <NavLink to={"group3"} className={"groupLink"}>
          Group 3
        </NavLink>
      </div>
      <div>
        <Outlet/> 
      </div>
    </div>
  );
};

export default Group;
