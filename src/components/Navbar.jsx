import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";

const nav = [
  {
    id: 0,
    path: "/",
    name: "Projects",
  },
  {
    id: 1,
    path: "/skills",
    name: "Skills",
  },
  {
    id: 2,
    path: "/contacts",
    name: "Contacts",
  },
];

export const Navbar = () => {
  return (
    <nav className="text-white flex list-none items-center gap-4">
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
