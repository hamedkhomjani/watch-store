import React, { Component } from "react";
import ReactDOM from "react-dom";

class ShoppingList extends Component {
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

ReactDOM.render(
  <WatchStore name="Hamed"></WatchStore>,
  document.getElementById('watch-store')
);