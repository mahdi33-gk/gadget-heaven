import React from "react";
import { NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="navbar w-10/12 mx-auto shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
              <NavLink >Statistics</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/statics'}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
            <div className="bg-white rounded-full p-1">
              <LuShoppingCart className="text-black font-thin cursor-pointer"></LuShoppingCart>
            </div>
            <div className="bg-white rounded-full p-1">
              <CiHeart className="text-black cursor-pointer"></CiHeart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
