import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
