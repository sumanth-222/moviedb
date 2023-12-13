import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="logo">
          <h1 className="title">movieDB</h1>
        </div>
        <div className="nav-title-card">
          <Link to="/">
            <p className="nav-title">POPULAR</p>
          </Link>
          <Link to="/top-rated">
            <p className="nav-title">TOP-RATED</p>
          </Link>
          <Link to="/upcoming">
            <p className="nav-title">UPCOMING</p>
          </Link>
        </div>
        <div>
          <input type="text" placeholder="Search.." className="search-input" />
          <button className="btn2" type="button">
            Search
          </button>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
