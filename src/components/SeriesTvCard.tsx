import { Link } from "react-router"
import { Card, CardContent } from "./ui/card"
import { Calendar, Star } from "lucide-react"
import { Badge } from "./ui/badge"

const SeriesTvCard = () => {
  return (
    <Link to=''>
      <Card className="p-0 gap-0 group overflow-hidden border-border bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative aspect-2/3 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src='https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/boboiboy_the_movie.jpg'
              alt='series name'
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Rating Badge */}
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-semibold text-foreground">
              8.5
            </span>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            Dirty Liner
          </h3>

          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>2015</span>
          </div>

          <div className="flex flex-wrap gap-1">
            <Badge
              className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground"
            >
              horor
            </Badge>
            <Badge
              className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground"
            >
              happy
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default SeriesTvCard