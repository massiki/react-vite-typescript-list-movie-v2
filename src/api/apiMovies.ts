import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const options = {
  method: 'GET',
  url: `${baseUrl}/movie/now_playing`,
  // params: { page: '2', sort_by: 'created_at.asc' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

export const apiMovies = async () => {
  try {
    const response = await axios.request(options)
    return response.data.results
  } catch (err) {
    console.error(err);
    throw err;
  }
}