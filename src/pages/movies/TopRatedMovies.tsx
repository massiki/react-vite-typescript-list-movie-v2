import { apiGenres } from "@/api/apiGenres"
import { useApiTopRatedMovies } from "@/api/useApiTopRatedMovies"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MovieCard from "@/components/MovieCard"
import { useMovieSearchAndPagination } from "@/hooks/useMoviesSearchAndPagination"
import type { genresType, movieType } from "@/lib/utility"
import { ChevronLeft, ChevronRight, Film, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRadMovies] = useState<movieType[]>([])
  const [genres, setGenres] = useState<genresType[]>([])
  const [query] = useSearchParams()
  const currentPage = Number(query.get('page'))
  const {
    searchMovies,
    isLoading,
    currentSearch,
    handlePrevPage,
    handleNextPage,
    handleSearchChange,
  } = useMovieSearchAndPagination({
    defaultMovies: topRatedMovies,
  })

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      if (!query.get('page')) {
        query.set('page', '1')
      }
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const resTopRatedMoves = await useApiTopRatedMovies(currentPage).then((res) => { return res })
      const resGenres = await apiGenres().then((res) => { return res })
      setTopRadMovies(resTopRatedMoves)
      setGenres(resGenres)
    }
    fetchTopRatedMovies()
  }, [currentPage])

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12 md:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Film className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Top
              </h2>
              <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                {topRatedMovies.length} Movies
              </span>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={currentSearch || ""}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="peer flex h-12 w-full rounded-lg border-2 border-input bg-background px-10 py-2 text-base font-medium text-foreground transition-all duration-150 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none placeholder:text-muted-foreground shadow-sm md:text-sm"
                />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-150">
                  <Search className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
            {searchMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => handlePrevPage(currentSearch || '')}
              disabled={currentPage === 1 || isLoading}
              className={`
            flex items-center gap-2 px-6 py-2 rounded-full border border-input text-foreground font-semibold transition
            disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500 disabled:opacity-60 disabled:cursor-not-allowed
            hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer
          `}
            >
              <ChevronLeft />
              Prev
            </button>
            <button
              onClick={() => handleNextPage(currentSearch || '')}
              disabled={searchMovies.length < 20 || isLoading}
              className={`
            flex items-center gap-2 px-6 py-2 rounded-full border border-input text-foreground font-semibold transition
            ml-4
            disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500 disabled:opacity-60 disabled:cursor-not-allowed
            hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer
          `}
            >
              Next
              <ChevronRight />
            </button>
          </div>
        </main >

        <Footer />
      </div >
    </>
  )
}

export default TopRatedMovies