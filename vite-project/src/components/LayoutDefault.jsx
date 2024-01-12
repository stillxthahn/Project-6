import React from "react";
import { getCookie } from "../helpers/cookie";
import { Link, NavLink, Outlet } from "react-router-dom";

const LayoutDefault = () => {
 const token = getCookie("token");
 console.log(token);
 return (
  <>
   <header className="header">
    <h1 className="header__logo">
     <Link to="/">TopCV</Link>
    </h1>
   </header>

   {token && (
    <ul className="header__menu">
     <li>
      <NavLink to="/admin/dashboard">DashBoard</NavLink>
     </li>
     <li>
      <NavLink to="/admin/company">Company</NavLink>
     </li>
     <li>
      <NavLink to="/admin/jobs">Jobs</NavLink>
     </li>
     <li>
      <NavLink to="/admin/cvs">Cvs</NavLink>
     </li>
    </ul>
   )}

   <ul className="header__menu">
    {token ? (
     <li>
      <NavLink to="/logout">Logout</NavLink>
     </li>
    ) : (
     <>
      <li>
       <NavLink to="/login">Login</NavLink>
      </li>
      <li>
       <NavLink to="/register">Register</NavLink>
      </li>
     </>
    )}
   </ul>

   <Outlet />
  </>
 );
};

export default LayoutDefault;
