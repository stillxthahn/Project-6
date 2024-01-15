import { setCookie } from "../helpers/cookie";
import { getUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authen } from "../actions/authen";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
const Login = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const [isAuthenUser, setIsauthenUser] = useState(true);
 const handleSubmit = async (e) => {
  e.preventDefault();
  const user = await getUser(
   e.target.elements.email.value,
   e.target.elements.password.value
  );
  if (user && user.length > 0) {
   const data = user[0];
   let time = 1;
   setCookie("id", data.id, time);
   setCookie("companyName", data.companyName, time);
   setCookie("phone", data.phone, time);
   setCookie("email", data.email, time);
   setCookie("token", data.token, time);
   setCookie("quantityPeople", data.quantityPeople, time);
   setCookie("description", data.description, time);
   setCookie("detail", data.detail, time);
   setCookie("address", data.address, time);
   setCookie("workingTime", data.workingTime, time);
   setCookie("website", data.website, time);
   dispatch(authen(true));
   navigate("/");
  } else {
   setIsauthenUser(false);
   const formSelect = document.querySelector("form");
   formSelect.reset();
  }
 };
 const handleFocus = (e) => {
  e.preventDefault();
  setIsauthenUser(true);
 };
 return (
  <form
   className="max-w-sm border-2 rounded-lg bg-white px-6 py-8 mx-auto"
   onSubmit={handleSubmit}
  >
   <div className="mb-4 font-bold text-3xl">Login</div>
   <div className=" text-slate-500 font-light">
    Enter your email and password to login to your account
   </div>

   <label className="mt-12 mb-1 block font-medium" htmlFor="email">
    Email
   </label>
   <input
    className="dark border rounded-md p-2 px-4 w-full mb-1"
    type="email"
    name="email"
    id="email"
    onFocus={handleFocus}
   />
   <label className="mt-3 mb-1 block font-medium" htmlFor="password">
    Password
   </label>
   <input
    className="dark border rounded-md p-2 px-4 w-full mb-1"
    type="password"
    name="password"
    id="password"
    onFocus={handleFocus}
   />
   <p
    className={
     isAuthenUser ? "hidden" : "block font-semibold text-red-700 text-sm"
    }
   >
    Incorrect email or password, please try again !
   </p>
   <button
    className="hover:bg-slate-800 block mt-4 p-3 bg-slate-950 text-white rounded-md  w-full font-semibold"
    type="submit"
   >
    Login
   </button>
  </form>
 );
};

export default Login;
