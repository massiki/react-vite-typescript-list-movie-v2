import { Link } from "react-router";
import logo from '../../public/logo-with-text-movief.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-colors hover:text-primary">
          <img src={logo} alt="logo movief" width={125} />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header