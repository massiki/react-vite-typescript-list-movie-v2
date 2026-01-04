import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const options = {
  method: 'GET',
  url: `${baseUrl}`,
  params: { page: '1', sort_by: 'created_at.asc' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

export const apiMovies = async () => {
  const movies = await axios.request(options)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  return movies.results;
}