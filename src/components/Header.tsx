import { Link } from "react-router";
import logo from '../../public/logo-with-text-movief.png'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-colors hover:text-primary">
          <img src={logo} alt="logo movief" width={125} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium">
                Movies
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-popover">
              <DropdownMenuItem asChild>
                <Link
                  to='/movie/popular'
                  className="w-full cursor-pointer"
                >
                  Popular
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to='/movie/top-rated'
                  className="w-full cursor-pointer"
                >
                  Top Rated
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to='/movie/upcomming'
                  className="w-full cursor-pointer"
                >
                  Upcomming
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Menu</span>
              </div>

              <nav className="flex flex-col gap-4">
                <SheetClose asChild>
                  <Link
                    to="/"
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                </SheetClose>

                <div className="space-y-3">
                  <span className="text-sm font-semibold text-muted-foreground">Movies</span>
                  <div className="flex flex-col gap-2 pl-3">
                    <SheetClose asChild>
                      <Link
                        to='/movie/popular'
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        Popular
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to='/movie/top-rated'
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        Top Rated
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to='/movie/upcomming'
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        Upcomming
                      </Link>
                    </SheetClose>
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