import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const Teachers = () => {
  return (
    <div>
      <div className="flex gap-6">
        <NavLink to={""} end={true} className={"teachersLink"}>
        First Teacher
      </NavLink>
      <NavLink to={"teachers2"} className={"teachersLink"}>
        Second Teacher
      </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Teachers;
