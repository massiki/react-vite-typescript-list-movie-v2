import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const apiMovieDetial = async (movieId: number) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/movie/${movieId}`,
    // params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}