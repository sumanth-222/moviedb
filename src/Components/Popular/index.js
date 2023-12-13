import {Component} from 'react'

import './index.css'

class Popular extends Component {
  render() {
    const {popularMovie} = this.props
    const {posterPath, title, rating} = popularMovie
    return (
      <li className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title}
          className="image"
        />
        <p className="movie-name">{title}</p>
        <p className="movie-name">Rating: {rating}</p>
        <button className="btn" type="button">
          View Details
        </button>
      </li>
    )
  }
}

export default Popular
