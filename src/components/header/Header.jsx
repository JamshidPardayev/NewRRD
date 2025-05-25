import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo1.png"

const Header = () => {
  return (
    <div className="bg-black ">
      <div className="h-[100px] max-w-[1200px] mx-auto px-4 flex justify-between items-center ">
        <Link to="/">
        <img
          src={logo}
          alt="logoImg"
          className="h-[100px] bg-transparent"
        />
        </Link>
        <ul className="flex gap-x-5 text-[18px] font-semibold max-md:text-[16px] max-md:hidden">
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-blue-700 before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/"} className={"headerLink"}>
              Home
            </NavLink>
          </li>
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-blue-700 before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/recipes"} className={"headerLink"}>
              Recipes
            </NavLink>
          </li>
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-blue-700 before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/users"} className={"headerLink"}>
              Users
            </NavLink>
          </li>
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-blue-700 before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/posts"} className={"headerLink"}>
              Posts
            </NavLink>
          </li>
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-blue-700 before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/login"} className={"headerLink"}>
              Login
            </NavLink>
          </li>
          <li className="relative before:absolute before:left-0 before:bottom-0 before:w-[0%] before:h-[2px] before:bg-blue-700 before:duration-300 hover:before:w-[100%]">
            <NavLink to={"/dashboard"} className={"headerLink"}>
              Dashboard
            </NavLink>
          </li>
        </ul>
        <button className="w-[120px] h-[40px] text-white rounded-tl-[50px] rounded-br-[50px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 duration-300 cursor-pointer max-md:hidden">
          <a href="#contact">Contact</a>
        </button>

        <IoMdMenu className="hidden max-md:block text-[30px] hover:text-blue-700 duration-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
