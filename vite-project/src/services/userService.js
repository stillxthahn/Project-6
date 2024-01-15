import { get } from "../utils/request";

export const getUser = async (email, password) => {
 const response = get(`company?email=${email}&password=${password}`);
 return response;
};
