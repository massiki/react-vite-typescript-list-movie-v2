import { Calendar, Star } from "lucide-react"
import { Link } from "react-router"

const MovieCard = () => {
  return (
    <Link
      // to={`/movie/${movie.id}`}
      to={`/movie/1`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        {/* Poster Image */}
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img
            src='https://thumbor.prod.vidiocdn.com/dBQbr6Yp29QnXIyK-MXYwSitybw=/filters:quality(70)/vidio-media-production/uploads/image/source/21790/b4895e.jpg'
            alt='movie title'
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Rating Badge */}
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
          <Star className="h-3 w-3 fill-current" />
          {/* <span>{movie.vote_average.toFixed(1)}</span> */}
          <span>8.5</span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="mb-2 line-clamp-1 text-base font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {/* {movie.title} */}
            Naruto
          </h3>

          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {/* <span>{releaseYear}</span> */}
            <span>2009</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1">
            {/* {genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground"
              >
                {genre}
              </span>
            ))} */}

            <span
              className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground"
            >
              Dewasa
            </span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border-2 border-primary-foreground px-4 py-2 text-sm font-semibold text-primary-foreground">
            View Details
          </span>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard