import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user } = useAuth();
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
        {!user ? (
          <Link
            className="border-2 border-purple-500 rounded-md shadow bg-white text-center px-4 py-1"
            to={"login"}>
            Login
          </Link>
        ) : (
          <>
            <button
              className="border-2 bg-purple-500 rounded-md shadow border-white text-center px-4 py-1"
              to={"login"}>
              Post Article
            </button>

            <div className="flex gap-4 justify-center items-center">
              <img
                src="http://dummyimage.com/188x100.png/dddddd/000000"
                className="w-8 h-8 rounded-full shadow"
                alt=""
              />
              <span className="text-xs ">{user}</span>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
