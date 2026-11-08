import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import GitHubCorner from './Components/GitHubCorner'
import StarRating from './Components/StarRating'
import ThemeToggle from './Components/ThemeToggle'
import Fireflies from './Components/Fireflies'

const App = () => {
  // The parent owns theme state so every page component can use it.
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('homepage-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('homepage-theme', theme)
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggleTheme = () => setTheme(current => current === 'light' ? 'dark' : 'light')

  const hobbies = [
    'Web Development',
    'Software Development',
    'Gaming',
    'Learning New Technology'
  ]

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('/data/favorites.json')

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        setItems(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFavorites()
  }, [])

  useEffect(() => {
    if (!loading && !error) {
      document.title = `${items.length} Favorite Items`
    }
  }, [items, loading, error])

  return (
    <div className={`app theme-${theme}`}>
      <Fireflies theme={theme} />
      <GitHubCorner href="https://github.com/ShrudeBridgeTroll/ShrudeBridgeTroll.github.io" />

      <Header
        theme={theme}
        name="Jefferey Watts"
        tagline="Web & Software Developer"
      >
        <Nav theme={theme} />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </Header>

      <main className="main-content" data-theme={theme}>
        <section className="about">
          <h2>About Me</h2>

          <p>
            I'm a Web and Software Development student interested in
            building useful applications and learning modern technologies.
            I enjoy working with JavaScript, React, C#, and web development.
          </p>
        </section>

        <section className="hobbies">
          <h2>My Interests</h2>

          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </section>

        <section className="item-list">
          <div className="list-heading">
            <span>Favorites</span>
            <span>{loading ? 'Loading...' : `${items.length} items`}</span>
          </div>

          {loading && (
            <div className="loading-message" role="status">
              <span className="loading-spinner" aria-hidden="true"></span>
              Loading favorites...
            </div>
          )}

          {error && (
            <div className="error-message" role="alert">
              Error loading favorites: {error}
            </div>
          )}

          {!loading && !error && (
            <ul>
              {items.map((item, index) => (
                <li className="item-row" key={item.id}>
                  <span className="item-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="item-info">
                    <h2>{item.title} <span className="item-year">({item.year})</span></h2>
                    <p>{item.type} · {item.genre}</p>
                    <p className="item-detail">{item.creator}</p>
                  </div>
                  <StarRating initialRating={item.rating} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer theme={theme} />
    </div>
  )
}

export default App
