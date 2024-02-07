import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

const links = [
  {
    id: 0,
    link: "https://t.me/hate_cs",
    icon: "pi pi-telegram text-white text-3xl",
  },
  {
    id: 1,
    link: "https://www.instagram.com/hate.cs/",
    icon: "pi pi-instagram text-white text-3xl",
  },
  {
    id: 2,
    link: "https://github.com/myupi",
    icon: "pi pi-github text-white text-3xl",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto flex items-center  gap-4 justify-center py-6 mt-7">
        {links.map((item) => {
          return (
            <Link to={item.link} key={item.id} target="_blank" className="hover:opacity-75 transition-all">
              <i className={item.icon}></i>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};
