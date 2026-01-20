import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const useApiTopRatedMovies = async (currentPage: number) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/movie/top_rated`,
    params: { page: currentPage },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  try {
    const response = await axios.request(options)
    return response.data.results
  } catch (err) {
    console.error(err);
    throw err;
  }
}