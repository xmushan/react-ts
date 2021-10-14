import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Foo from './page/foo'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/foo">
          <Foo />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
