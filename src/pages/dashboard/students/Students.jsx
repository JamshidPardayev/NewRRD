import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Students = () => {
  return (
    <div>
      <div className="flex gap-6">
        <NavLink to={""} end={true} className={"studentsLink  text-center border px-3 py-1 rounded-[3px] border-violet-800 shadow-[0px_2px_8px_3px_#360564]"}>
          1
        </NavLink>
        <NavLink to={"student2"} className={"studentsLink  text-center border px-3 py-1 rounded-[3px] border-violet-800 shadow-[0px_2px_8px_3px_#360564]"}>
          2
        </NavLink>
        <NavLink to={"student3"} className={"studentsLink  text-center border px-3 py-1 rounded-[3px] border-violet-800 shadow-[0px_2px_8px_3px_#360564]"}>
          3
        </NavLink>
        <NavLink to={"student4"} className={"studentsLink  text-center border px-3 py-1 rounded-[3px] border-violet-800 shadow-[0px_2px_8px_3px_#360564]"}>
          4
        </NavLink>
        <NavLink to={"student5"} className={"studentsLink  text-center border px-3 py-1 rounded-[3px] border-violet-800 shadow-[0px_2px_8px_3px_#360564]"}>
          5
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Students;
