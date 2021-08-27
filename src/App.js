import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Piano from "./Piano";
import PageNotFound from "./PageNotFound";
import Piano2 from "./Piano2";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/piano">
            <Piano />
          </Route>
          <Route exact path="/piano2">
            <Piano2 />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
