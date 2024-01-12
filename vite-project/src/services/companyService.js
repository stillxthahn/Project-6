import { get } from "../../utils/request";

export const getCompanies = async () => {
 const response = await get("company");
 return response;
};
