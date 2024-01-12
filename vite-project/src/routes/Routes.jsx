import LayoutDefault from "../components/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import PrivateRoutes from "../components/PrivateRoutes";
import DashBoard from "../pages/DashBoard";
import Company from "../pages/Company";
import Jobs from "../pages/Jobs";
import Cvs from "../pages/Cvs";
import Tags from "../pages/Tags";

const Routes = [
 {
  path: "/",
  element: <LayoutDefault />,
  children: [
   {
    index: true,
    element: <Home />,
   },
   {
    path: "/tags/:id",
    element: <Tags />,
   },
   {
    path: "/login",
    element: <Login />,
   },
   {
    path: "/register",
    element: <Register />,
   },
   {
    path: "/logout",
    element: <Logout />,
   },
   {
    element: <PrivateRoutes />,
    children: [
     {
      path: "/admin/dashboard",
      element: <DashBoard />,
     },
     {
      path: "/admin/company",
      element: <Company />,
     },
     {
      path: "/admin/jobs",
      element: <Jobs />,
     },
     {
      path: "/admin/cvs",
      element: <Cvs />,
     },
    ],
   },
  ],
 },
];

export default Routes;
