import React, { useEffect } from "react";
import { deleteAllCookies } from "../helpers/cookie";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authen } from "../actions/authen";

const Logout = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 useEffect(() => {
  deleteAllCookies();
  dispatch(authen(false));
  navigate("/");
 }, []);
 return <></>;
};

export default Logout;
