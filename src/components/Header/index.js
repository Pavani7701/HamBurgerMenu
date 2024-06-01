// Write your code here
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="nav-bar-header">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          className="website-image"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="hamburger-icon-button"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-btn"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="36" color="#616e7c" />
            </button>
            <ul className="nav-links-lists">
              <li className="nav-link-items">
                <Link to="/" className="nav-links" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="nav-links-para">Home</p>
                </Link>
              </li>
              <li className="nav-link-items">
                <Link to="/about" className="nav-links" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="nav-links-para">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
