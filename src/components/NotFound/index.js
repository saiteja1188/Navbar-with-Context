// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      return (
        <>
          <div className={`home-app-container ${homeBgClassName}`}>
            <Navbar />
            <div className="response-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="home-image"
              />
              <h1 className={`home-heading ${homeTextClassName}`}>
                Lost your Way?
              </h1>
              <p className={`home-heading ${homeTextClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
