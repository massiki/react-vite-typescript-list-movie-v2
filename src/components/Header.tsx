import { Link } from "react-router";
import logo from '../../public/logo-with-text-movief.png'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, Film, Menu, Tv } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const movieLinks = [
  { title: 'Hot', href: '/' },
  { title: 'Popular', href: '/movie/popular' },
  { title: 'Top Rated', href: '/movie/top-rated' },
  { title: 'Upcomming', href: '/movie/upcomming' },
]

const seriesTvLinks = [
  { title: 'Airing Today', href: '/series-tv/airing-today' },
  { title: 'Airing Soon', href: '/series-tv/airing-soon' },
  { title: 'Popular', href: '/series-tv/popular' },
  { title: 'Top Rated', href: '/series-tv/top-rated' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-colors hover:text-primary">
          <img src={logo} alt="logo movief" width={125} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* movies */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium cursor-pointer">
                <Film />
                Movies
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-popover">
              {movieLinks.map((link, index) => (
                <DropdownMenuItem asChild>
                  <Link key={index}
                    to={`${link.href}`}
                    className="w-full cursor-pointer"
                  >
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* series tv */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium cursor-pointer">
                <Tv />
                Series TV
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-popover">
              {seriesTvLinks.map((link, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link
                    to={link.href}
                    className="w-full cursor-pointer"
                  >
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Menu</span>
              </div>

              <nav className="flex flex-col gap-1">
                {/* movies */}
                <div className="space-y-3">
                  <span className="text-sm font-semibold text-muted-foreground">Movies</span>
                  <div className="flex flex-col gap-2 pl-3 mt-3">
                    {movieLinks.map((link, index) => (
                      <SheetClose key={index} asChild>
                        <Link
                          to={`${link.href}`}
                          className="text-sm font-medium transition-colors hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                {/* series tv */}
                <div className="space-y-3">
                  <span className="text-sm font-semibold text-muted-foreground">Series TV</span>
                  <div className="flex flex-col gap-2 pl-3 mt-3">
                    {seriesTvLinks.map((link, index) => (
                      <SheetClose asChild>
                        <Link key={index}
                          to={link.href}
                          className="text-sm font-medium transition-colors hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header