import React, { useContext } from "react";
import logo from "../../../assets/images/logo.png";
import { navItems } from "./navBarItems";
import { Link, NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { GLOBAL_CONTEXT } from "../../../layouts/AppLayout";

import User from "./User";

const NavBar = () => {
  const { user } = useContext(GLOBAL_CONTEXT);

  return (
    <div className="sticky top-0 z-[100] shadow">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn px-3  mr-2 lg:hidden bg-[#153F47 !important]"
            >
              <VscThreeBars className="text-2xl text-white" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {navItems.slice(0, user ? 2 : 3).map((item, index) => (
                <li key={index}>
                  <NavLink to={item[1]} className="bg-[unset]">
                    {item[0]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/home" className="hidden lg:flex">
            <img
              src={logo}
              alt=""
              className="w-[50px] duration-300  hover:scale-[0.9]"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.slice(0, user ? 2 : 3).map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item[1]}
                  className="bg-[unset] font-semibold  hover:text-[#00000096]"
                >
                  {index !== 0 && (
                    <div className="border-2 border-black rounded-full" />
                  )}
                  {item[0]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">{user && <User />}</div>
      </div>
    </div>
  );
};

export default NavBar;
