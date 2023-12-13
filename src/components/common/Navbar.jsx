import { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const links = [
  {
    name: "WORLD",
    link: "/world",
  },

  { name: "BUSSINESS", link: "/business" },

  { name: "TECHNOLOGY", link: "/tech" },

  { name: "ENTERTAINMENT", link: "/fun" },

  { name: "SPORTS", link: "/sports" },

  { name: "TRAVEL", link: "/travel" },
];

const Navbar = () => {
  const [showSearch, setShowSearh] = useState(false);

  return (
    <div className="flex justify-between w-full bg-gray-200 py-2 px-10 items-center">
      <FiMenu className="w-6 h-6" />
      <nav className="flex justify-center gap-10 w-full bg-gray-200 py-2 px-10 items-center">
        {links.map((d, i) => (
          <Link
            to={d.link}
            key={i}
            className="navlink">
            {d.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3 transition duration-300 ease-in-out">
        {showSearch && (
          <input
            type="text"
            placeholder="Search ..."
            className="w-full px-2 py-2 rounded-full outline-none"
          />
        )}
        <button onClick={() => setShowSearh(!showSearch)}>
          <FiSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
