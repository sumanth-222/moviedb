import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import TopRatedApi from './Components/TopRatedApi'
import UpcomingApi from './Components/UpcomingApi'
import './App.css'

// write your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/top-rated" component={TopRatedApi} />
      <Route exact path="/" component={Home} />
      <Route exact path="/upcoming" component={UpcomingApi} />
    </Switch>
  </BrowserRouter>
)

export default App
