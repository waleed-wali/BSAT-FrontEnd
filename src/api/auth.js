import axios from "axios";
import { API_URL } from "../constants/global";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const signup = async ( email,fullName, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/register`, {name:fullName, email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}