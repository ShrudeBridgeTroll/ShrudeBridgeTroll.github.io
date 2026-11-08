const Footer = ({ theme }) => {
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
