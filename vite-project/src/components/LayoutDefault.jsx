import { getCookie } from "../helpers/cookie";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { useSelector } from "react-redux";
const LayoutDefault = () => {
 const authen = useSelector((state) => state.authenReducer);
 const token = getCookie("token");
 console.log(token);
 return (
  <>
   <header className="header">
    <h1 className="header__logo">
     <Link to="/">TopCV</Link>
    </h1>

    {token && (
     <ul className="header__menu">
      <li>
       <NavLink to="/">Home</NavLink>
      </li>
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
   </header>
   <div className="body">
    <Outlet />
   </div>
  </>
 );
};

export default LayoutDefault;
