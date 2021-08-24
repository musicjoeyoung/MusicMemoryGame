import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
