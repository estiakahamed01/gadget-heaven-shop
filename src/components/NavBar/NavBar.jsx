import React from "react";
import { BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation()
  console.log(location)
  // {location.pathname === `/` ? "font-semibold" : "font-semibold text-black"}
  const links = (
    <>
      <li className={location.pathname === `/` ? "font-semibold" : "font-semibold text-black"}>
        <NavLink to="/">Home</NavLink>

      </li>
      <li className={location.pathname === `/` ? "font-semibold" : "font-semibold text-black"}>
        <NavLink to="/statics">Statics</NavLink>
      </li>
      <li className={location.pathname === `/` ? "font-semibold" : "font-semibold text-black"}>
      <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
//  {location.pathname === `/` ? "font-medium text-2xl text-white" : "font-medium text-2xl text-black"}
  return (
    <div className={location.pathname === `/` ? "w-11/12 mx-auto mt-7 py-2 bg-[#9538E2] rounded-t-2xl" : "w-11/12 mx-auto mt-7 py-2 bg-white rounded-t-2xl text-black"}>
      <div className={location.pathname === `/` ? "navbar bg-[#9538E2] container mx-auto" : "navbar bg-white container mx-auto"}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className={location.pathname === `/` ? "font-medium text-2xl text-white" : "font-medium text-2xl text-black"}>Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          <a className={location.pathname === `/` ? "p-3 bg-white rounded-full text-gray-700" : "p-3 rounded-full text-gray-700 border-[1px] border=gray-500"}>
            <BsCart3 />
          </a>
          <a className={location.pathname === `/` ? "p-3 bg-white rounded-full text-gray-700" : "p-3 rounded-full text-gray-700 border-[1px] border=gray-500"}>
            <MdFavoriteBorder />
          </a>
        </div>
      </div>
    </div>
  );
};
// {location.pathname === `/` ? "p-3 bg-white rounded-full text-gray-700" : "p-3 rounded-full text-gray-700 border-[1px] border=gray-700"}

export default NavBar;
