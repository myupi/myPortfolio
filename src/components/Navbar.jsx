import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";

export const Navbar = ({nav}) => {
  return (
    <nav className="text-white flex list-none items-center gap-4 max-md:hidden">
      {nav.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => (isActive ? style.hover : "")}
          >
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
