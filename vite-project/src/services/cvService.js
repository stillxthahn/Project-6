import { get } from "../utils/request";

export const getCv = async (id) => {
 if (id) {
  const response = await get(`cv/${id}`);
  return response;
 }
 const response = await get(`cv`);
 return response;
};

export const getCvByCompany = async (id) => {
 const response = await get(`cv?idCompany=${id}`);
 return response;
};
