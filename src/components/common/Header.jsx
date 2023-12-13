import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 py-2 text-lg text-gray-600">
      <Link
        to={"/"}
        className="text-gray-700 font-medium text-2xl tracking-tight">
        {" "}
        Intern
        <span className="text-purple-500">Chatter</span>
      </Link>
      <nav className="flex justify-start gap-10 items-center px-10 py-2 text-lg text-gray-600">
        <Link
          to={"/"}
          className="navlink">
          Home
        </Link>
        <Link
          to={"/explore"}
          className="navlink">
          Explore
        </Link>
        <Link className="border-2 border-purple-500 rounded-md shadow bg-white text-center px-4 py-1">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
