type movieType = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type genresType = {
  id: number,
  name: string,
}


type belongsToCollectionType = {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

type productionCompanyType = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

type productionCountryType = {
  iso_3166_1: string
  name: string
}

type spokenLanguageType = {
  english_name: string
  iso_639_1: string
  name: string
}

type movieDetailType = {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: belongsToCollectionType | null
  budget: number
  genres: genresType[]
  homepage: string | null
  id: number
  imdb_id: string | null
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: productionCompanyType[]
  production_countries: productionCountryType[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: spokenLanguageType[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type seriesTvType = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  first_air_date: string
  name: string
  vote_average: number
  vote_count: number
}

type seriesTvCreatedByType = {
  id: number
  credit_id: string
  name: string
  original_name: string
  gender: number | null
  profile_path: string | null
}

type seriesTvEpisodeType = {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string | null
  production_code: string
  runtime: number | null
  season_number: number
  show_id: number
  still_path: string | null
}

type seriesTvNetworkType = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

type seriesTvSeasonType = {
  air_date: string | null
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string | null
  season_number: number
  vote_average: number
}

type seriesTvDetailType = {
  adult: boolean
  backdrop_path: string | null
  created_by: seriesTvCreatedByType[]
  episode_run_time: number[]
  first_air_date: string
  genres: genresType[]
  homepage: string | null
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string | null
  last_episode_to_air: seriesTvEpisodeType | null
  name: string
  next_episode_to_air: seriesTvEpisodeType | null
  networks: seriesTvNetworkType[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: productionCompanyType[]
  production_countries: productionCountryType[]
  seasons: seriesTvSeasonType[]
  spoken_languages: spokenLanguageType[]
  status: string
  tagline: string | null
  type: string
  vote_average: number
  vote_count: number
}

export type { movieType, genresType, movieDetailType, seriesTvType, seriesTvDetailType }