// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <>
          <div className={`home-app-container ${homeBgClassName}`}>
            <Navbar />
            <div className="response-container">
              <img src={homeImageUrl} alt="home" className="home-image" />
              <h1 className={`home-heading ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
