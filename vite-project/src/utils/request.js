const DOMAIN = "http://localhost:3002/";

export const get = async (api) => {
 const response = await fetch(DOMAIN + api);
 const result = await response.json();
 return result;
};
