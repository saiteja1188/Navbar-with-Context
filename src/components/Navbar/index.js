// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggle = () => {
        toggleTheme()
      }

      const navBgClassName = isDarkTheme ? 'nav-bg-dark' : 'nav-bg-light'

      const navLinkClassName = isDarkTheme ? 'nav-link-light' : 'nav-link-dark'

      const websiteLogoImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={`nav-container ${navBgClassName}`}>
          <div className="nav-content">
            <img
              src={websiteLogoImageUrl}
              alt="website logo"
              className="website-logo-img"
            />
            <ul className="list-menu">
              <li className="list-item">
                <Link to="/" className={`nav-link ${navLinkClassName}`}>
                  Home
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className={`nav-link ${navLinkClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={onClickToggle}
              data-testid="theme"
            >
              <img src={themeLogoUrl} alt="theme" className="theme-img" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
