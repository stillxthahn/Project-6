import { get } from "../utils/request";

export const getCities = async () => {
 const response = await get("city");
 return response;
};
