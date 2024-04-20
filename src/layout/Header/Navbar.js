import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const routes = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/project", name: "Project" },
  ];
  return (
    <>
      <div className="contianer  w-[1280px] mx-auto">
        <div className="flex    w-full justify-between p-6">
          <div className="logoWrap  ">
            <Link to="/" className="flex items-center">
              <i className="fa-brands fa-react text-3xl "></i>
              <h1 className="font-semibold p-4">HA TAE MIN</h1>
            </Link>
          </div>
          <ul className="flex gap-10 p-4 font-mono">
            {routes.map((item, i) => (
              <li key={i} className="flex justify-center items-center text-xl">
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button>
            <i className="fa-regular fa-sun text-2xl"></i>
            <i className="fa-solid fa-moon text-2xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
