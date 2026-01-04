import { Link } from "react-router"
import Header from "../components/Header"
import { ArrowLeft, Calendar, Globe, Star, Users } from "lucide-react"

const MovieDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Backdrop */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden md:h-[60vh]">
        <img
          src='https://thumbor.prod.vidiocdn.com/dBQbr6Yp29QnXIyK-MXYwSitybw=/filters:quality(70)/vidio-media-production/uploads/image/source/21790/b4895e.jpg'
          alt='Naruto Shippuden The Movie'
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <main className="container relative -mt-48 pb-12 md:-mt-64 text-start">
        <Link to="/" className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Movies
        </Link>

        <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          {/* Poster */}
          <div className="mx-auto w-full max-w-[280px] md:mx-0 lg:max-w-[320px]">
            <div className="aspect-2/3 overflow-hidden rounded-lg bg-muted shadow-2xl">
              <img
                src='https://thumbor.prod.vidiocdn.com/dBQbr6Yp29QnXIyK-MXYwSitybw=/filters:quality(70)/vidio-media-production/uploads/image/source/21790/b4895e.jpg'
                alt='Naruto Shippuden The Movie'
                className="h-full w-full object-cover"
              />

            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 text-start">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Naruto Shippuden The Movie
              </h1>
              <p className="text-lg text-muted-foreground">
                劇場版 NARUTO -ナルト- 疾風伝
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">
                  8.5
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Calendar className="h-4 w-4" />
                <span>2009</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Users className="h-4 w-4" />
                <span>1,067 votes</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Globe className="h-4 w-4" />
                <span className="uppercase">JA</span>
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              <span
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
              >
                Animation
              </span>
              <span
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
              >
                Action
              </span>
              <span
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
              >
                Fantasy
              </span>
            </div>

            {/* Overview */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons.
              </p>
            </div>

            {/* Additional Info */}
            <div className="rounded-3xl bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Movie Information
              </h3>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Release Date</dt>
                  <dd className="font-medium text-card-foreground">
                    2007-08-04
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Original Language</dt>
                  <dd className="font-medium uppercase text-card-foreground">
                    JA
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Popularity</dt>
                  <dd className="font-medium text-card-foreground">
                    7.3
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Adult Content</dt>
                  <dd className="font-medium text-card-foreground">
                    No
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MovieDetail