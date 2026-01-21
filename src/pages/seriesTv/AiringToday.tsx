import { useApiSeriesTv } from "@/api/useApiSeriesTv"

const AiringToday = () => {
  const { apiAiringTodaySeriesTv } = useApiSeriesTv()

  console.log(apiAiringTodaySeriesTv().then((res) => { return res }))

  return <h1>Halaman Airing Today</h1>
}


export default AiringToday