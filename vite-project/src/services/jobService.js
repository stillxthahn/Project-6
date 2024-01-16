import { get } from "../utils/request";

export const getJobByTag = async (tag) => {
 const response = await get(`jobs?tags_like=${tag}`);
 return response;
};

export const getJob = async (id) => {
 if (id) {
  const response = await get(`jobs/${id}`);
  return response;
 }
 const response = await get(`jobs`);
 return response;
};

export const getJobByCompany = async (id) => {
 const response = await get(`jobs?idCompany=${id}`);
 return response;
};

export const getJobBySeach = async (input, city) => {
 var path = `jobs?description_like=${input || ""}&city_like=`;
 if (city !== "all") {
  path += city;
 }
 console.log(path);
 const response = await get(path);
 return response;
};
