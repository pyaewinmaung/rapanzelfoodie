import api, { baseUrl } from "../config/axios";

export const getuser = async (body) => {return await api.get(`${baseUrl}/users`, body); };