import api, { baseUrl } from "../config/axios";


export const getrecipes = async (body) => {return await api.get(`${baseUrl}/get_recipes`, body); };
export const createrecipes = async (body) => {return await api.post(`${baseUrl}/recipes`, body); };