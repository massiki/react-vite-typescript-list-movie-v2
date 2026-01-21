import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const useApiMovies = () => {
  const options = (url: string, queryPage: number | null, querySearch: string | null) => ({
    method: 'GET',
    url: url,
    params: { page: queryPage, query: querySearch },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });

  const hitApi = async (url: string, queryPage: number | null, querySearch: string | null) => {
    try {
      const response = await axios.request(options(url, queryPage, querySearch));
      return response.data.results
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const apiMoviesList = (queryPage: number) => {
    const URL = `${baseUrl}/movie/now_playing`
    return hitApi(URL, queryPage, null)
  }

  const apiPopularMovies = (currentPage: number) => {
    const URL = `${baseUrl}/movie/popular`
    return hitApi(URL, currentPage, null)
  }

  const apiTopRatedMovies = (currentPage: number) => {
    const URL = `${baseUrl}/movie/top_rated`
    return hitApi(URL, currentPage, null)
  }

  const apiUpcommingMovies = (currentPage: number) => {
    const URL = `${baseUrl}/movie/upcoming`
    return hitApi(URL, currentPage, null)
  }

  const apiSearch = (currentSearch: string, currentPage: number) => {
    const URL = `${baseUrl}/search/movie`
    return hitApi(URL, currentPage, currentSearch)
  }

  const apiGenres = async () => {
    const URL = `${baseUrl}/genre/movie/list`
    try {
      const response = await axios.request(options(URL, null, null))
      return response.data.genres
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const apiMovieDetial = async (movieId: number) => {
    const URL = `${baseUrl}/movie/${movieId}`
    try {
      const response = await axios.request(options(URL, null, null))
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  return { apiMoviesList, apiMovieDetial, apiPopularMovies, apiGenres, apiTopRatedMovies, apiUpcommingMovies, apiSearch }
}