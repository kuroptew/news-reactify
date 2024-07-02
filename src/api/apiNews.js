import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export async function getNews({currentPage = 1, pageSize = 10}) {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number: currentPage,
        page_size: pageSize
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
