import LayoutDefault from "../components/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import PrivateRoutes from "../components/PrivateRoutes";
import Company from "../pages/Company";
import Jobs from "../pages/Jobs";
import JobTag from "../pages/JobTag";
import Search from "../components/Search";
import AdminCompany from "../pages/PrivateRoute/AdminCompany";
import AdminDashBoard from "../pages/PrivateRoute/AdminDashBoard";
import AdminJobs from "../pages/PrivateRoute/AdminJobs";
import AdminCvs from "../pages/PrivateRoute/AdminCvs";
import JobSearch from "../pages/JobSearch";

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
    path: "/tags/:key",
    element: <JobTag />,
   },
   {
    path: "/company/:id",
    element: <Company />,
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
    path: "/search",
    element: <Search />,
   },
   {
    path: "/search/:input?/:city",
    element: <JobSearch />,
   },
   {
    path: "/jobs/:id",
    element: <Jobs />,
   },
   {
    element: <PrivateRoutes />,
    children: [
     {
      path: "/admin/dashboard",
      element: <AdminDashBoard />,
     },
     {
      path: "/admin/company",
      element: <AdminCompany />,
     },
     {
      path: "/admin/jobs",
      element: <AdminJobs />,
     },
     {
      path: "/admin/cvs",
      element: <AdminCvs />,
     },
    ],
   },
  ],
 },
];

export default Routes;
