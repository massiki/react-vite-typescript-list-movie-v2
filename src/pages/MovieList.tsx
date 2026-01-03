import { Film, TrendingUp } from "lucide-react"
import Header from "../components/Header"
import MovieCard from "../components/MovieCard"
import Footer from "../components/Footer"

const MovieList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <TrendingUp className="h-4 w-4" />
              Discover Amazing Movies
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Welcome to MovieF
              <span className="block text-primary">Magic Movie</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Explore our curated collection of must-watch movies. From timeless
              classics to the latest blockbusters, find your next favorite film.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" /> */}
      </section>

      {/* Movies Grid */}
      <main className="container py-12 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Film className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Popular Movies
            </h2>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            {/* {movies.length}  */} 5 movies
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
          {/* {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))} */}
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MovieList