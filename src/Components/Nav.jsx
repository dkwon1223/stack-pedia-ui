import React from "react";
import StackIcon from "../assets/icons/stack-icon.svg";
import hamburger from "../assets/icons/hamburger.svg";
import LogOutIcon from "../assets/icons/logout-icon.svg";
import Button from "./Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";

const Nav = () => {
  const [openNavigation, setNavigation] = useState(false);
  const { logout } = useLogout();

  function toggleNav() {
    setNavigation(!openNavigation);
  }
  
  const handleLogout = () => {
    logout();
  }

  return (
    <header className="pl-10 pr-10 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex items-center">
          <img src={StackIcon} alt="Logo" width={40} height={10} />
          <h1 className="ml-2 text-2xl font-bold text-orange-500">
            StackPedia
          </h1>
        </a>
        <ul
          className={`flex-1 flex justify-end items-center gap-12 mr-10 ${
            openNavigation
              ? "fixed top-20 left-0 w-full z-50 backdrop-blur-sm border-b h-screen flex-col justify-center bg-white"
              : "max-lg:hidden"
          }`}
        >
          <li className="font-monserrat leading-normal text-lg font-bold text-slate-gray cursor-pointer hover:underline">
            <NavLink id="navTechLink" to="/technologies">
              <p className="hover:text-coral-red">Technologies</p>
            </NavLink>
          </li>
          <li className="font-monserrat leading-normal text-lg font-bold text-slate-gray cursor-pointer hover:underline ">
            <NavLink id="navStackLink" to="/stacks">
              <p className="hover:text-coral-red">Stacks</p>
            </NavLink>
          </li>
          <li className="font-monserrat leading-normal text-lg font-bold text-slate-gray cursor-pointer hover:underline ">
            <NavLink id="loginLink" to="/signin">
              <p className="hover:text-coral-red">Sign In</p>
            </NavLink>
          </li>
          <div className="flex">
            <Button label="Log Out" iconUrl={LogOutIcon} onClick={handleLogout}/>
          </div>
        </ul>
        
        <div className="hidden max-lg:block cursor-pointer" onClick={toggleNav}>
          <img
            src={hamburger}
            alt="Hamburger dropdown"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
