import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./watch-store.css"
import Spinner from "./components/spinner/spinner.jsx"
import MoveOn from "./components/move-on/move-on.jsx"
import MoveIt from "./components/move-it/move-it.jsx"

class WatchStore extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/spinner">Spinner</Link>
        <Link to="/move-on">Move On</Link>
        <Link to="/move-it">Move It</Link>



        <Route path="/spinner">
          <Spinner></Spinner>
        </Route>

        <Route path="/move-on">
          <MoveOn></MoveOn>
        </Route>

        <Route path="/move-it">
          <MoveOn></MoveOn>
        </Route>

      </Router>
    );
  }
}

ReactDOM.render(
  <WatchStore ></WatchStore>,
  document.getElementById('watch-store')
);