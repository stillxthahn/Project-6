import { getCookie } from "../helpers/cookie";
import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
 const token = getCookie("token");
 console.log(token);
 return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoutes;
