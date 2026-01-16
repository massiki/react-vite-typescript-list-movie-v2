import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const apiSearch = async (query: string) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/search/movie`,
    params: { query: query, include_adult: 'false', language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  const response = await axios.request(options)
  return response.data.results
}