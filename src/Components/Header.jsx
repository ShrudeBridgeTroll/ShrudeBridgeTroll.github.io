const Header = ({ children, theme }) => {
  const isDark = theme === 'dark'

  return (
    <header className={`header theme-${theme}`}>
      <img
        src={isDark ? '/banner-night.webp' : '/banner-day.webp'}
        alt="Jefferey Watts — Software Developer. Web, Full Stack, React, JavaScript, Systems Analysis."
        className="hero-banner"
        width="2172"
        height="362"
        fetchPriority="high"
      />
      {children}
    </header>
  )
}

export default Header
