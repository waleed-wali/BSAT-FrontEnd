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

export const signup = async (email, fullName, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/register`, { name: fullName, email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
export const getProfile = async () => {
  try {
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData.token)
    const response = await axios.post(
      `${API_URL}/api/v1/users/profile/me`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${userData.token}` // Add the token to the Authorization header
        }
      }
    );
    console.log("samem", response.data.user)
    return response.data.user;
  } catch (error) {
    return error.response.data;
  }
}

export const saveUserData = async (userData) => {
  try {
    // console.log(userData.token)
    const response = await axios.put(
      `${API_URL}/api/v1/users/${userData.id}`,
      userData
    );
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error)
    return error?.response;
  }
}

export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/users`
    );
    console.log("data", response)
    return response.data;
  } catch (error) {
    console.log(error)
    return error?.response;
  }
}

export const activateUser = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/users/activate/${id}`
    );
    console.log("data", response)
    return response.data;
  } catch (error) {
    console.log(error)
    return error?.response;
  }
}

export const deactivateUser = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/users/de-activate/${id}`
    );
    console.log("data", response)
    return response.data;
  } catch (error) {
    console.log(error)
    return error?.response;
  }
}

export const changeUserPassword = async (userData) => {
  try {
    let tokenData = localStorage.getItem("userData");
    let token = JSON.parse(tokenData).token;
    const response = await axios.post(
      `${API_URL}/api/v1/users/password/change`,
      userData,
      { headers: { "Authorization": `Bearer ${token}` } }
    );
    console.log("response in password change api is ; ", response)
    return response.data;
  } catch (error) {
    console.log(error)
    return error?.response;
  }
}