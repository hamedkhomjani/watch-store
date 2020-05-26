import React, { Component } from "react";
import ReactDOM from "react-dom";

class Person extends Component {
  render() {
    return (
      <div className="shopping-list">
        ShoppingList
      </div>
    );
  }
}

class WatchStore extends Component {

  state = { name: "Hamed" }

  render() {
    return (
      <div><ShoppingList shalgham={this.state.name} name="Asghar"></ShoppingList></div>
    );
  }
}

class ShoppingList extends Component {

  state = { name: "Shaghayegh" }

  render() {
    return (
      <div><Person Surname={this.props.name} Age="23" name="Shahin"></Person></div>
    );
  }
}

ReactDOM.render(
  <WatchStore name="Hamed"></WatchStore>,
  document.getElementById('watch-store')
);