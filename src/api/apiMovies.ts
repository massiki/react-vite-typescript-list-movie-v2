import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const apiMovies = async (queryPage: number) => {
  if (!queryPage) {
    queryPage = 1
  }
  const options = {
    method: 'GET',
    url: `${baseUrl}/movie/now_playing`,
    params: { page: queryPage },
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