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

export type { movieType, genresType, movieDetailType, seriesTvType }