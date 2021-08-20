import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Category from "./pages/Category";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/category/:categoria" component={Category} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
