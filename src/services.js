import axios from "axios";

const BASE_URL = "https://dev.moons.rocks/login/login";


export const login = async (userData) => {

  // b4app -> user dev-moons -> username is the mail
  // tomar el session token para posteriores peticiones

  try {
    const response = await axios.post(BASE_URL, userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
