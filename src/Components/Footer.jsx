import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext.jsx'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <footer className={`footer theme-${theme}`}>
      <p>&copy; 2026 Jefferey Watts</p>

      <p>
        <a href="#">GitHub</a> | <a href="#">Contact Me</a>
      </p>
    </footer>
  )
}

export default Footer
