import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
      <Redirect from='/' to='/from' />;
    </Router>
  )
}
export default App
