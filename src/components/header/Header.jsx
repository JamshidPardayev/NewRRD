import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <img src="" alt="logoImg" />
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Recipes</NavLink>
        </li>
        <li>
          <NavLink>Users</NavLink>
        </li>
        <li>
          <NavLink>Posts</NavLink>
        </li>
        <li>
          <NavLink>Login</NavLink>
        </li>
      </ul>

    </div>
  );
};

export default Header;
