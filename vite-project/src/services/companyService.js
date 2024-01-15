import { get } from "../utils/request";

export const getCompany = async (id) => {
 if (id) {
  const response = await get(`company/${id}`);
  return response;
 }
 const response = await get("company");
 return response;
};
