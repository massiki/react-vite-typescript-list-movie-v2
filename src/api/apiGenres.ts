import axios from "axios";

const baseGenres = import.meta.env.VITE_BASE_GENRES
const apiKey = import.meta.env.VITE_API_KEY

const options = {
  method: 'GET',
  url: `${baseGenres}`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

export const apiGenres = async () => {
  const genres = await axios.request(options)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  return genres.genres;
}