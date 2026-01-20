import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const useApiPopularMovies = async (currentPage: number) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/movie/popular`,
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