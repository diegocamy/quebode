import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Category from "./pages/Category";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import { Helmet } from "react-helmet";

function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Helmet>
        <title>Que Bode</title>
        <meta
          name="description"
          content="Encontrá películas para mirar rápido y sin publicidades"
        />
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/category/:categoria" component={Category} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
