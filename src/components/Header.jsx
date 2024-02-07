import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header className="bg-black p-3 border-b-gray-800 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to={"/"} className="text-white text-2xl">
            <span className="font-bold">myupi</span> portfolio
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
