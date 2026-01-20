import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY
const baseGenres = import.meta.env.VITE_BASE_GENRES

export const useApiMovies = () => {
  const options = (url: string, queryPage: number | null) => ({
    method: 'GET',
    url: url,
    params: { page: queryPage },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });

  const apiMoviesList = async (queryPage: number) => {
    const URL = `${baseUrl}/movie/now_playing`

    try {
      const response = await axios.request(options(URL, queryPage))
      return response.data.results
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const apiGenres = async () => {
    const URL = `${baseGenres}`

    const genres = await axios.request(options(URL, null))
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
    return genres.genres;
  }

  const apiMovieDetial = async (movieId: number) => {
    const URL = `${baseUrl}/movie/${movieId}`

    try {
      const response = await axios.request(options(URL, null))
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const apiPopularMovies = async (currentPage: number) => {
    const URL = `${baseUrl}/movie/popular`

    try {
      const response = await axios.request(options(URL, currentPage))
      return response.data.results
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const apiTopRatedMovies = async (currentPage: number) => {
    const URL = `${baseUrl}/movie/top_rated`

    try {
      const response = await axios.request(options(URL, currentPage))
      return response.data.results
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const apiUpcommingMovies = async (currentPage: number) => {
    const URL = `${baseUrl}/movie/upcoming`

    try {
      const response = await axios.request(options(URL, currentPage))
      return response.data.results
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return { apiMoviesList, apiMovieDetial, apiPopularMovies, apiGenres, apiTopRatedMovies, apiUpcommingMovies }
}