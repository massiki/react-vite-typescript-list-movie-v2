import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const apiSearch = async (querySearch: string, queryPage: number) => {
  if (!queryPage) {
    queryPage = 1
  }
  const options = {
    method: 'GET',
    url: `${baseUrl}/search/movie`,
    params: { query: querySearch, include_adult: 'false', language: 'en-US', page: queryPage },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  const response = await axios.request(options)
  return response.data.results
}