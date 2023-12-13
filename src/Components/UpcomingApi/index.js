import {Component} from 'react'
import Navbar from '../Navbar'
import UpcomingMovies from '../UpcomingMovies'

import './index.css'

class UpcomingApi extends Component {
  state = {upcomingMovies: []}

  componentDidMount() {
    this.getUpcomingMovies()
  }

  getUpcomingMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/upcoming?api_key=2a361e493860984291558e93781ca9ab&language=en-US&page=1'

    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedUpcoming = data.results.map(each => ({
      posterPath: each.poster_path,
      title: each.title,
      id: each.id,
      rating: each.vote_average,
    }))
    this.setState({upcomingMovies: updatedUpcoming})
    console.log(data)
  }

  render() {
    const {upcomingMovies} = this.state
    return (
      <div className="home-container">
        <Navbar />
        <ul className="popular-lists">
          {upcomingMovies.map(each => (
            <UpcomingMovies upcomingMovie={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default UpcomingApi
