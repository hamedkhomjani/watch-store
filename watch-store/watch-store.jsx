import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./watch-store.css"
import Spinner from "./components/spinner/spinner.jsx"

class WatchStore extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/spinner">Spinner</Link>



        
        <Route path="/spinner">
          <Spinner></Spinner>
        </Route>

      </Router>
    );
  }
}

ReactDOM.render(
  <WatchStore ></WatchStore>,
  document.getElementById('watch-store')
);