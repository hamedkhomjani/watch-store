import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./watch-store.css"
import Spinner from "./components/spinner/spinner.jsx"
import Logo from "./components/logo/logo.jsx"
import Navigation from "./components/navigation/navigation.jsx"
import History from "./components/history/history.jsx"
import Ambassadors from "./components/ambassadors/ambassadors.jsx"
import CustomerService from "./components/customer-service/customer-service.jsx"
import Contact from "./components/contact/contact.jsx"
import Header from "./components/header/header.jsx"
import Store from "./components/store/store.jsx"

class WatchStore extends Component {
  render() {
    return (
      <Router>

        <Header>

          <Link to="/"><Logo></Logo></Link>

          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/ambassadors">Ambassadors</Link>
            <Link to="/customer-service">Customer Service</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>

        </Header>

        <Route path="/" exact>
          <Store></Store>
        </Route>
        <Route path="/history">
          <History></History>
        </Route>
        <Route path="/ambassadors">
          <Ambassadors></Ambassadors>
        </Route>
        <Route path="/customer-service">
          <CustomerService></CustomerService>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>


      </Router>
    );
  }
}

ReactDOM.render(
  <WatchStore ></WatchStore>,
  document.getElementById('watch-store')
);