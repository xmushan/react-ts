import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './routes'
const App = () => {
  return (
    <Router>
      {
        routes.map( (params,index) => <Switch key={index}>
          <Route {...params}/>
        </Switch>)
      }
    </Router>
  )
}
export default App
