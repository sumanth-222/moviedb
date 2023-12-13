import {Component} from 'react'
import Navbar from '../Navbar'
import TopRated from '../TopRated'

import './index.css'

class TopRatedApi extends Component {
  state = {topRatedMovies: []}

  componentDidMount() {
    this.getTopRatedMovies()
  }

  getTopRatedMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=2a361e493860984291558e93781ca9ab&language=en-US&page=1'

    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedTopData = data.results.map(each => ({
      posterPath: each.poster_path,
      title: each.title,
      id: each.id,
      rating: each.vote_average,
    }))
    this.setState({topRatedMovies: updatedTopData})
    console.log(data)
  }

  render() {
    const {topRatedMovies} = this.state
    return (
      <div className="home-container">
        <Navbar />
        <ul className="popular-lists">
          {topRatedMovies.map(each => (
            <TopRated topRatedMovie={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TopRatedApi
