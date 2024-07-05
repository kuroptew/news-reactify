import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export async function getNews({ pageNumber = 1, pageSize = 10, category, keywords }) {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number: pageNumber,
        page_size: pageSize,
        category,
        keywords,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getLatestNews() {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
