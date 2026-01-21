import { useApiSeriesTv } from "@/api/useApiSeriesTv"
import Header from "@/components/Header"
import { Badge } from "@/components/ui/badge"
import type { seriesTvDetailType } from "@/lib/utility"
import { ArrowLeft, Calendar, Clock, ExternalLink, Globe, Play, Radio, Star, Tv, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useParams } from "react-router"

const pathUrl = import.meta.env.VITE_PATH_URL

const SeriesTvDetail = () => {
  const { id } = useParams()
  const { apiDetailSeriesTv } = useApiSeriesTv()
  const [seriesTv, setSeriesTv] = useState<seriesTvDetailType>()

  useEffect(() => {
    const load = async () => {
      const resDetailSeriesTv = await apiDetailSeriesTv(Number(id)).then((res) => { return res })
      setSeriesTv(resDetailSeriesTv)
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Backdrop */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden md:h-[60vh]">
        <img
          src={`${pathUrl}/${seriesTv?.backdrop_path}`}
          alt={seriesTv?.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <main className="container relative -mt-48 pb-12 md:-mt-64 text-start">
        <Link
          to="/series-tv/airing-today"
          className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to TV Series
        </Link>

        <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          {/* Poster */}
          <div className="mx-auto w-full max-w-[280px] md:mx-0 lg:max-w-[320px]">
            <div className="aspect-2/3 overflow-hidden rounded-lg bg-muted shadow-2xl">
              <img
                src={`${pathUrl}/${seriesTv?.poster_path}`}
                alt={seriesTv?.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Networks Badge */}
            <div className="mt-4 rounded-lg bg-card p-4 shadow-md">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Radio className="h-4 w-4" />
                <span>Available on</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {seriesTv?.networks.map((network) => (
                  <div key={network.id} className="flex items-center gap-2">
                    <img
                      src={`${pathUrl}/${network?.logo_path}`}
                      alt={network?.name}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Title & Tagline */}
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {seriesTv?.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {seriesTv?.original_name}
              </p>
              {seriesTv?.tagline && (
                <p className="mt-2 text-lg italic text-muted-foreground">
                  '{seriesTv?.tagline}''
                </p>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">
                  {seriesTv?.vote_average.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Calendar className="h-4 w-4" />
                <span>{seriesTv?.last_air_date?.split('-')[0]}</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Clock className="h-4 w-4" />
                <span>{seriesTv?.episode_run_time}m/ep</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Tv className="h-4 w-4" />
                <span>{seriesTv?.seasons.length} Seasons</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Play className="h-4 w-4" />
                <span>{seriesTv?.number_of_episodes} Episodes</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Users className="h-4 w-4" />
                <span>{seriesTv?.vote_count} votes</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Globe className="h-4 w-4" />
                <span className="uppercase">{seriesTv?.original_language}</span>
              </div>

              <Badge
                variant='default'
                className="rounded-full px-4 py-2"
              >
                {seriesTv?.status}
              </Badge>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {seriesTv?.genres.map((genre) => (
                <span key={genre.id}
                  className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Homepage Button */}
            <div>
              {seriesTv?.homepage && (
                <div className="mt-6">
                  <a
                    href={seriesTv?.homepage}
                    target="_blank"
                    className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <button
                      className="flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-blue-600 px-6 py-2 text-lg font-semibold text-primary-foreground shadow-lg hover:from-blue-700 hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      <ExternalLink />
                      Visit Official Website
                    </button>
                  </a>
                </div>
              )}
            </div>

            {/* Overview */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {seriesTv?.overview}
              </p>
            </div>

            {/* Created By */}
            <div className="rounded-lg bg-card p-4 shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                Created By
              </h3>
              <div className="flex flex-wrap gap-3">
                {seriesTv?.created_by.map((data) => (
                  <div key={data.id}
                    className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                  >
                    <img
                      src={`${pathUrl}${data.profile_path}`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-card-foreground">
                      {data.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Series Information */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Series Information
              </h3>
              <dl className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
                <div>
                  <dt className="text-muted-foreground">First Air Date</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.first_air_date
                      ? new Date(seriesTv.first_air_date).toLocaleDateString("en-EN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      : "N/A"
                    }
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Last Air Date</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.last_air_date
                      ? new Date(seriesTv?.last_air_date).toLocaleDateString("en-EN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      : "N/A"
                    }
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Original Language</dt>
                  <dd className="font-medium uppercase text-card-foreground">
                    {seriesTv?.original_language}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Episode Runtime</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.episode_run_time}m
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.type}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">In Production</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.in_production ? 'Yes' : 'No'}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Origin Country</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.origin_country}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Spoken Languages</dt>
                  {seriesTv?.spoken_languages.map((data) => (
                    <dd key={data.name} className="font-medium text-card-foreground">
                      - {data.name}
                    </dd>
                  ))}
                </div>
                <div>
                  <dt className="text-muted-foreground">Popularity</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.popularity}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Adult Content</dt>
                  <dd className="font-medium text-card-foreground">
                    {seriesTv?.adult ? 'Yes' : 'No'}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Last Episode */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Last Episode
              </h3>

              <div className="flex gap-4">
                <img
                  src={`${pathUrl}${seriesTv?.last_episode_to_air?.still_path}`}
                  alt={seriesTv?.last_episode_to_air?.name}
                  className="h-24 w-40 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-card-foreground">
                    S{seriesTv?.last_episode_to_air?.season_number} EP{seriesTv?.last_episode_to_air?.episode_number}: {seriesTv?.last_episode_to_air?.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {seriesTv?.last_episode_to_air?.overview}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>Air Date: {seriesTv?.last_episode_to_air?.air_date
                      ? new Date(seriesTv?.last_episode_to_air?.air_date).toLocaleDateString("en-EN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      : "N/A"
                    }</span>
                    <span>Runtime: {seriesTv?.last_episode_to_air?.runtime}m</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      {seriesTv?.last_episode_to_air?.vote_average}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasons */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                All Seasons
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {seriesTv?.seasons.map((data) => (
                  <div
                    className="flex gap-3 rounded-lg bg-muted/50 p-3"
                  >
                    <img
                      src={`${pathUrl}${data.poster_path}`}
                      alt={data.name}
                      className="h-20 w-14 rounded object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-card-foreground">
                        {data.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {data.episode_count} Episodes
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {data.air_date
                          ? new Date(data.air_date).toLocaleDateString("en-EN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                          : "N/A"
                        }
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="text-xs">{data.vote_average}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Companies */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Production Companies
              </h3>
              <div className="flex flex-wrap gap-4">
                {seriesTv?.production_companies.map((data) => (
                  <div key={data.id}
                    className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                  >
                    <img
                      src={`${pathUrl}${data.logo_path}`}
                      alt={data.name}
                      className="h-8 w-auto object-contain"
                    />
                    <div>
                      <p className="font-medium text-card-foreground">
                        {data.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {data.origin_country}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Countries */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Production Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {seriesTv?.production_countries.map((data) => (
                  <div className="inline-block rounded-full border border-accent-foreground bg-accent/80 px-4 py-2 text-sm font-semibold text-accent-foreground shadow ">
                    {data.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}

export default SeriesTvDetail