import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./watch-store.css"
import Spinner from "./components/spinner/spinner.jsx"

class WatchStore extends Component {
  render() {
    return (
      <Spinner></Spinner>
    );
  }
}

ReactDOM.render(
  <WatchStore ></WatchStore>,
  document.getElementById('watch-store')
);