import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const useApiSeriesTv = () => {
  const options = (url: string) => ({
    method: 'GET',
    url: url,
    // params: { page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });

  const hitApi = async (url: string) => {
    try {
      const response = await axios.request(options(url));
      return response.data.results
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const apiAiringTodaySeriesTv = () => {
    const URL = `${baseUrl}/tv/airing_today`
    return hitApi(URL)
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

  return { apiAiringTodaySeriesTv, ApiAiringSoonSeriesTv, apiPopularSeriesTv, apiTopRatedSeriesTv }
} 