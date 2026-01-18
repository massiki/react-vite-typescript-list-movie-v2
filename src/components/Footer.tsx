const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary-foreground py-8">
      <div className="container text-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} MovieF by Fikri Amrullah. Made with ❤️ and code.
        </p>
      </div>
    </footer>
  )
}

export default Footer