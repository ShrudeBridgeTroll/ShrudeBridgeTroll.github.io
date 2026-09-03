import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

const App = () => {
  const hobbies = [
    'Web Development',
    'Software Development',
    'Gaming',
    'Learning New Technology'
  ]

  return (
    <div className="app">
      <Header
        name="Jefferey Watts"
        tagline="Web & Software Developer"
      >
        <Nav />
      </Header>

      <main className="main-content">
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
      </main>

      <Footer />
    </div>
  )
}

export default App