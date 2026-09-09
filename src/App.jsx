import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import GitHubCorner from './Components/GitHubCorner'
import StarRating from './Components/StarRating'

const App = () => {

  const hobbies = [
  'Web Development',
  'Software Development',
  'Gaming',
  'Learning New Technology'
]

  const items = [
    { name: 'Prison Break', type: 'Series', initialRating: 4 },
    { name: 'Dragonlance: The Chronicles', type: 'Book', initialRating: 5 },
    { name: 'Martial Arts Training', type: 'Hobby', initialRating: 3 },
    { name: 'What Dreams May Come', type: 'Movie', initialRating: 4 }
  ]

  return (
    <div className="app">
      <GitHubCorner href="https://github.com/ShrudeBridgeTroll/ShrudeBridgeTroll.github.io" />

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

        <section className="item-list">
          <div className="list-heading">
            <span>Favorites</span>
            <span>{items.length} items</span>
          </div>

          <ul>
            {items.map((item, index) => (
              <li className="item-row" key={item.name}>
                <span className="item-number">0{index + 1}</span>
                <div className="item-info">
                  <h2>{item.name}</h2>
                  <p>{item.type}</p>
                </div>
                <StarRating initialRating={item.initialRating} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App