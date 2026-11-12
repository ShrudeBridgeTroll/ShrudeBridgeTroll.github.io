import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext.jsx'

const Nav = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <nav className={`nav theme-${theme}`}>
      <a href="#">Home</a>
      <a href="#">Projects..</a>
      <a href="#">Contact</a>
    </nav>
  )
}

export default Nav
