import { Link, useParams } from "react-router"
import Header from "../../components/Header"
import { ArrowLeft, Calendar, Clock, DollarSign, ExternalLink, Film, Globe, Star, Users } from "lucide-react"
import { useEffect, useState } from "react"
import type { movieDetailType } from "../../lib/utility"
import Footer from "@/components/Footer"
import { useApiMovies } from "@/api/useApiMovies"

const pathUrl = import.meta.env.VITE_PATH_URL

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<movieDetailType | null>(null)
  const { apiMovieDetial } = useApiMovies()

  const handleMovie = async () => {
    const response = await apiMovieDetial(Number(id))
    return response
  }

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  }

  const formatCurrency = (amount: number) => {
    if (amount === 0) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  useEffect(() => {
    handleMovie().then((res) => { setMovie(res) })
  }, [id])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden md:h-[60vh]">
        <img
          src={`${pathUrl}/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      <main className="container relative -mt-48 pb-12 md:-mt-64 text-start">
        <Link
          to="/"
          className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Movies
        </Link>

        <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          <div className="mx-auto w-full max-w-[280px] md:mx-0 lg:max-w-[320px]">
            <div className="aspect-2/3 overflow-hidden rounded-lg bg-muted shadow-2xl">
              <img
                src={`${pathUrl}/${movie?.poster_path}`}
                alt={movie?.title}
                className="h-full w-full object-cover"
              />
            </div>

            {movie?.belongs_to_collection ? (
              <div className="mt-4 rounded-lg bg-card p-4 shadow-md">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Film className="h-4 w-4" />
                  <span>Part of</span>
                </div>
                <p className="mt-1 font-semibold text-card-foreground">
                  {movie?.belongs_to_collection?.name}
                </p>
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {movie?.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {movie?.original_title}
              </p>
              {movie?.tagline ? (
                <p className="mt-2 text-lg italic text-muted-foreground">
                  "{movie?.tagline}"
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">
                  {movie?.vote_average.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Calendar className="h-4 w-4" />
                <span>{movie?.release_date.split('-')[0]}</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Clock className="h-4 w-4" />
                <span>{formatRuntime(Number(movie?.runtime))}</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Users className="h-4 w-4" />
                <span>{movie?.vote_count}</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Globe className="h-4 w-4" />
                <span className="uppercase">{movie?.original_language}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground text-sm">
                <span className="font-semibold">
                  {movie?.status}
                </span>
              </div>

            </div>

            <div className="flex flex-wrap gap-2">
              {movie?.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {movie?.homepage ? (
              <div className="mt-6">
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
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
            ) : null}

            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {movie?.overview}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-card p-4 shadow-md">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">Budget</span>
                </div>
                <p className="mt-1 text-xl font-bold text-card-foreground">
                  {formatCurrency(Number(movie?.budget))}
                </p>
              </div>
              <div className="rounded-lg bg-card p-4 shadow-md">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">Revenue</span>
                </div>
                <p className="mt-1 text-xl font-bold text-card-foreground">
                  {formatCurrency(Number(movie?.revenue))}
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Movie Information
              </h3>
              <dl className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3">
                <div>
                  <dt className="text-muted-foreground">Release Date</dt>
                  <dd className="font-medium text-card-foreground">
                    {movie?.release_date
                      ? new Date(movie.release_date).toLocaleDateString("en-EN", {
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
                    {movie?.original_language}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Runtime</dt>
                  <dd className="font-medium text-card-foreground">
                    {formatRuntime(Number(movie?.runtime))}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Origin Country</dt>
                  <dd className="font-medium text-card-foreground">
                    {movie?.origin_country}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Spoken Languages</dt>
                  {movie?.spoken_languages.map((language, index) => {
                    return (
                      <dd key={index} className="font-medium text-card-foreground">
                        - {language.english_name}
                      </dd>
                    )
                  })}
                </div>

                <div>
                  <dt className="text-muted-foreground">Popularity</dt>
                  <dd className="font-medium text-card-foreground">
                    {movie?.popularity.toFixed(1)}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Adult Content</dt>
                  <dd className="font-medium text-card-foreground">
                    {movie?.adult ? 'Yes' : 'No'}
                  </dd>
                </div>

                <div>
                  <dt className="text-muted-foreground">IMDB</dt>
                  <dd className="font-medium text-card-foreground">
                    <a
                      href={`https://www.imdb.com/title/${movie?.imdb_id}`}
                      target="_blank"
                      className="text-primary hover:underline"
                    >
                      {movie?.imdb_id}
                    </a>
                  </dd>
                </div>

              </dl>
            </div>

            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Production Companies
              </h3>
              <div className="flex flex-wrap gap-4">
                {movie?.production_companies.map((companie) => {
                  return (
                    <div key={companie.id} className="flex items-center gap-3 rounded-lg bg-muted/10 px-4 py-3">
                      <img
                        src={`${pathUrl}/${companie.logo_path}`}
                        alt={companie.name}
                        className="h-8 w-auto object-contain"
                      />
                      <div>
                        <p className="font-medium text-card-foreground">
                          Paramount Animation
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {companie.origin_country}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Production Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {movie?.production_countries.map((country, index) => {
                  return (
                    <div key={index} className="inline-block rounded-full border border-accent-foreground bg-accent/80 px-4 py-2 text-sm font-semibold text-accent-foreground shadow ">
                      {country.name}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main >

      <Footer />
    </div>
  )
}

export default MovieDetail