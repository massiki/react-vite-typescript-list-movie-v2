import Header from "@/components/Header"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, ExternalLink, Globe, Play, Radio, Star, Tv, Users } from "lucide-react"
import { Link } from "react-router"

const SeriesTvDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Backdrop */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden md:h-[60vh]">
        <img
          src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
          alt='boboiboy'
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
                src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                alt='boboiboy'
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
                <div className="flex items-center gap-2">
                  <img
                    src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                    alt='boboiboy'
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                    alt='boboiboy'
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Title & Tagline */}
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Dirty Linen
              </h1>
              <p className="text-lg text-muted-foreground">
                Dirty Linen
              </p>
              <p className="mt-2 text-lg italic text-muted-foreground">
                Dirty Linen tagline
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">
                  8.5
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Calendar className="h-4 w-4" />
                <span>2023</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Clock className="h-4 w-4" />
                <span>30m/ep</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Tv className="h-4 w-4" />
                <span>2 Seasons</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Play className="h-4 w-4" />
                <span>153 Episodes</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Users className="h-4 w-4" />
                <span>107 votes</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
                <Globe className="h-4 w-4" />
                <span className="uppercase">TL</span>
              </div>

              <Badge
                variant='default'
                className="rounded-full px-4 py-2"
              >
                Ended
              </Badge>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              <span
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
              >
                drama
              </span>
              <span
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
              >
                mistery
              </span>
            </div>

            {/* Homepage Button */}
            <div>
              <a
                href='https://youtube.com'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-6">
                  <a
                    href='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
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
              </a>
            </div>

            {/* Overview */}
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ad nostrum sunt repellendus voluptate, nam exercitationem? Magni eaque officiis ea cupiditate, ipsa ratione, explicabo, maxime quaerat repudiandae dolorem exercitationem illum!
              </p>
            </div>

            {/* Created By */}
            <div className="rounded-lg bg-card p-4 shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                Created By
              </h3>
              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                >
                  <img
                    src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                    alt='fikri'
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-card-foreground">
                    fikri
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                >
                  <img
                    src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                    alt='fikri'
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-card-foreground">
                    fikri
                  </span>
                </div>
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
                    2023-01-23
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Last Air Date</dt>
                  <dd className="font-medium text-card-foreground">
                    2023-08-25
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Original Language</dt>
                  <dd className="font-medium uppercase text-card-foreground">
                    TL
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Episode Runtime</dt>
                  <dd className="font-medium text-card-foreground">
                    30m
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="font-medium text-card-foreground">
                    Scripted
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">In Production</dt>
                  <dd className="font-medium text-card-foreground">
                    No
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Origin Country</dt>
                  <dd className="font-medium text-card-foreground">
                    PH
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Spoken Languages</dt>
                  <dd className="font-medium text-card-foreground">
                    Languages
                    English, Tagalog
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Popularity</dt>
                  <dd className="font-medium text-card-foreground">
                    5.2
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

            {/* Last Episode */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Last Episode
              </h3>
              <div className="flex gap-4">
                <img
                  src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                  alt='spongebob'
                  className="h-24 w-40 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-card-foreground">
                    S2
                    E80
                    Explosive Ending
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    Aidan rushes to save Leona from Alexa's vengeful wrath.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>Air Date: 2023-08-25</span>
                    <span>Runtime: 30m</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      8.5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasons */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Seasons 1
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  className="flex gap-3 rounded-lg bg-muted/50 p-3"
                >
                  <img
                    src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                    alt='spongebob'
                    className="h-20 w-14 rounded object-cover"
                  />

                  <div className="flex-1">
                    <p className="font-semibold text-card-foreground">
                      nama season
                    </p>
                    <p className="text-sm text-muted-foreground">
                      73 Episodes
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2023
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs">8.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Companies */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Production Companies
              </h3>
              <div className="flex flex-wrap gap-4">
                <div
                  className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                >
                  <img
                    src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                    alt='spongebob'
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <p className="font-medium text-card-foreground">
                      Dreamscape Entertainment Television
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PH
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3"
                >
                  <img
                    src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
                    alt='spongebob'
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <p className="font-medium text-card-foreground">
                      Dreamscape Entertainment Television
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Countries */}
            <div className="rounded-lg bg-card p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Production Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="inline-block rounded-full border border-accent-foreground bg-accent/80 px-4 py-2 text-sm font-semibold text-accent-foreground shadow ">
                  philifines
                </div>
                <div className="inline-block rounded-full border border-accent-foreground bg-accent/80 px-4 py-2 text-sm font-semibold text-accent-foreground shadow ">
                  philifines
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}

export default SeriesTvDetail