import {Component} from 'react'
import Navbar from '../Navbar'
import Popular from '../Popular'

import './index.css'

class Home extends Component {
  state = {popularMovies: []}

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=2a361e493860984291558e93781ca9ab&language=en-US&page=1'

    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.results.map(each => ({
      posterPath: each.poster_path,
      title: each.title,
      id: each.id,
      rating: each.vote_average,
    }))
    this.setState({popularMovies: updatedData})
    console.log(data)
  }

  render() {
    const {popularMovies} = this.state
    return (
      <div className="home-container">
        <Navbar />
        <ul className="popular-lists">
          {popularMovies.map(each => (
            <Popular popularMovie={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
