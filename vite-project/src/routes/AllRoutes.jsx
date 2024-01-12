import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
const AllRoutes = () => {
 const elements = useRoutes(Routes);
 return <>{elements}</>;
};

export default AllRoutes;
