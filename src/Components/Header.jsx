const Header = ({ children }) => {
  return (
    <header className="header">
      <img src="/hero-banner.svg" alt="Jefferey Watts - Web & Software Developer" className="hero-banner" />
      {children}
    </header>
  )
}

export default Header