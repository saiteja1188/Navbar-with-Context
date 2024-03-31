// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <div className={`home-app-container ${homeBgClassName}`}>
            <Navbar />
            <div className="response-container">
              <img src={homeImageUrl} alt="about" className="home-image" />
              <h1 className={`home-heading ${homeTextClassName}`}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
