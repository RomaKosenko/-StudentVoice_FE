import axios from "axios";

import { SERVER_BASE_URL } from "../utils/constant";;

const ArticleAPI = {
  delete: (id, token) =>
    axios.delete(`${SERVER_BASE_URL}/articles/${id}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    }),
  get: (slug) => axios.get(`${SERVER_BASE_URL}/articles/${slug}`),
  create: async (article, token) => {
    const { data, status } = await axios.post(
      `${SERVER_BASE_URL}/articles`,
      JSON.stringify({ article }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${encodeURIComponent(token)}`,
        },
      }
    );
    return {
      data,
      status,
    };
  },
};

export default ArticleAPI;
