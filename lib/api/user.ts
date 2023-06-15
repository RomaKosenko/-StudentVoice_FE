import axios from "axios";

import { SERVER_BASE_URL } from "../utils/constant";

const UserAPI = {
  login: async (email, password) => {
    try {
      return  await axios.post(
        `${SERVER_BASE_URL}/users/login`,
        JSON.stringify({ user: { email, password } }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      return error.response;
    }
  },
  register: async (username, email, password) => {
    try {
      return await axios.post(
        `${SERVER_BASE_URL}/users`,
        JSON.stringify({ user: { username, email, password } }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      return error.response;
    }
  },
  follow: async (username) => {
    const user: any = JSON.parse(window.localStorage.getItem("user"));
    const token = user?.token;
    try {
      return await axios.post(
        `${SERVER_BASE_URL}/profiles/${username}/follow`,
        {},
        {
          headers: {
            Authorization: `Token ${encodeURIComponent(token)}`,
          },
        }
      );
    } catch (error) {
      return error.response;
    }
  },
  unfollow: async (username) => {
    const user: any = JSON.parse(window.localStorage.getItem("user"));
    const token = user?.token;
    try {
      return await axios.delete(
        `${SERVER_BASE_URL}/profiles/${username}/follow`,
        {
          headers: {
            Authorization: `Token ${encodeURIComponent(token)}`,
          },
        }
      );
    } catch (error) {
      return error.response;
    }
  },
  get: async (username) => axios.get(`${SERVER_BASE_URL}/profiles/${username}`),
};

export default UserAPI;
