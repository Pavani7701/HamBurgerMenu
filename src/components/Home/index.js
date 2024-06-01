// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="image-container">
      <img
        className="mobile-image"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
        alt="home"
      />
      <img
        className="desktop-image"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
        alt="home"
      />
    </div>
  </div>
)

export default Home
