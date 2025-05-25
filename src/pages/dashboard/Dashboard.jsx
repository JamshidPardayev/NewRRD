import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import { HiUserGroup } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-white flex">
      <div
        className={`fixed top-0 left-0 z-50 ${
          collapsed ? "w-[80px]" : "w-[250px]"
        } h-screen bg-slate-900 p-4 duration-300`}
      >
        <h1
          className={`relative flex items-center gap-2 text-[22px] font-semibold mb-8 ${
            collapsed ? "justify-center" : ""
          }`}
          title="Dashboard"
        >
          <MdDashboard />
          {!collapsed && <p>Dashboard</p>}
        </h1>

        <NavLink
          to={""}
          end
          className="sidebarLink flex items-center justify-center gap-3 p-2 rounded-[6px] mb-3 border border-violet-900 shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-900 duration-300"
          title="Group"
        >
          <HiUserGroup />
          {!collapsed && <p>Group</p>}
        </NavLink>

        <NavLink
          to={"profile"}
          className="sidebarLink flex items-center justify-center gap-3 p-2 rounded-[6px] mb-3 border border-violet-900 shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-900 duration-300"
          title="Profile"
        >
          <FaUser />
          {!collapsed && <p>Profile</p>}
        </NavLink>

        <NavLink
          to={"teachers"}
          className="sidebarLink flex items-center justify-center gap-3 p-2 rounded-[6px] mb-3 border border-violet-900 shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-900 duration-300"
          title="Teachers"
        >
          <BsPersonBoundingBox />
          {!collapsed && <p>Teachers</p>}
        </NavLink>

        <NavLink
          to={"students"}
          className="sidebarLink flex items-center justify-center gap-3 p-2 rounded-[6px] mb-3 border border-violet-900 shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-900 duration-300"
          title="Students"
        >
          <PiStudentBold />
          {!collapsed && <p>Students</p>}
        </NavLink>

        <NavLink
          to={"statistics"}
          className="sidebarLink flex items-center justify-center gap-3 p-2 rounded-[6px] mb-3 border border-violet-900 shadow-[0px_2px_8px_3px_#360564] hover:bg-violet-900 duration-300"
          title="Statistics"
        >
          <IoStatsChartSharp />
          {!collapsed && <p>Statistics</p>}
        </NavLink>
      </div>

      <div
        className={`flex-1 min-h-[100vh] relative duration-300 overflow-x-auto ${
          collapsed ? "ml-[80px]" : "ml-[250px]"
        }`}
      >
        <div className="flex justify-between items-center h-[60px] bg-slate-900 px-4">
          <FaArrowRightArrowLeft
            onClick={() => {
              if (window.innerWidth > 768) {
                setCollapsed((prev) => !prev);
              }
            }}
            className="text-[24px] hover:text-violet-700 cursor-pointer duration-300 max-sm:text-[20px]"
            title="Toggle Sidebar"
          />
          <div>
            <button
              onClick={() => navigate("/")}
              className="h-[35px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer max-sm:px-4 max-sm:text-[14px]"
            >
              Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="h-[35px] px-6 bg-violet-900 rounded-2xl hover:bg-violet-800 duration-300 hover:shadow-[3px_3px_5px_#360564] cursor-pointer ml-2 max-sm:px-4 max-sm:text-[14px]"
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
