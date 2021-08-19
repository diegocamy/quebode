import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function Routes() {
  return (
    <Router>
      <ScrollToTop />
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
