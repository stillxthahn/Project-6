import { get } from "../utils/request";

export const getTags = async (id) => {
 if (id) {
  const response = await get(`tags?key=${id}`);
  return response;
 }
 const response = await get("tags");
 return response;
};
