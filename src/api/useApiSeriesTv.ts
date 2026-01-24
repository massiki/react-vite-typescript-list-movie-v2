import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const useApiSeriesTv = () => {
  const options = (url: string, querySearch: string | null = null, queryPage: number | null = null) => ({
    method: 'GET',
    url: url,
    params: { page: queryPage, query: querySearch },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });

  const hitApi = async (
    url: string,
    querySearch: string | null = null,
    queryPage: number | null = null
  ) => {
    try {
      const response = await axios.request(options(url, querySearch, queryPage));
      return response.data.results
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const apiAiringTodaySeriesTv = (queryPage: number) => {
    const URL = `${baseUrl}/tv/airing_today`
    return hitApi(URL, null, queryPage)
  }
  const ApiAiringSoonSeriesTv = () => {
    const URL = `${baseUrl}/tv/on_the_air`
    return hitApi(URL)
  }

  const apiPopularSeriesTv = () => {
    const URL = `${baseUrl}/tv/popular`
    return hitApi(URL)
  }

  const apiTopRatedSeriesTv = () => {
    const URL = `${baseUrl}/tv/top_rated`
    return hitApi(URL)
  }

  const apiSearchSeriesTv = (querySearch: string, queryPage: number) => {
    const URL = `${baseUrl}/search/tv`
    try {
      return hitApi(URL, querySearch, queryPage)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const apiDetailSeriesTv = async (seriesId: number) => {
    const URL = `${baseUrl}/tv/${seriesId}`
    try {
      const response = await axios.request(options(URL))
      return response.data
    } catch (error) {
      console.log(error)
      throw (error)
    }
  }

  const apiGenresSeriesTv = async () => {
    const URL = `${baseUrl}/genre/tv/list`
    try {
      const response = await axios.request(options(URL))
      return response.data.genres
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  return { apiAiringTodaySeriesTv, ApiAiringSoonSeriesTv, apiPopularSeriesTv, apiTopRatedSeriesTv, apiGenresSeriesTv, apiDetailSeriesTv, apiSearchSeriesTv }
} 