import axios from "axios";

const BASE_URL = "https://reqres.in/api/login";

export const login = async (userData) => {
  try {
    const response = await axios.post(BASE_URL, userData);
    return response.data.token;
  } catch (error) {
    console.error(error);
  }
};
