import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MyDate } from "./MyDate";

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {this.props.list}
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class HelloMessage extends Component {

  state = { date: new Date().toDateString(), list: ["Instagaram", "WhatsApp", "Oculus"] };

  render() {
    return (
      <div>Hello {this.props.name} Date: <MyDate date={this.state.date} ></MyDate> list: <ShoppingList list={this.state.list}></ShoppingList></div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Hamed"></HelloMessage>,
  document.getElementById('watch-store')
);