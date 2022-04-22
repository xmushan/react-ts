import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from './routes'
/**
 * 
 * @returns 123123
 * 1231231
 * fasdf 
 */
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
