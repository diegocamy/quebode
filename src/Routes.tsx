import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
