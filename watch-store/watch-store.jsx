import React, { Component } from "react";
import ReactDOM from "react-dom";

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {this.props.list.map((item)=>{
            return <li>{item}</li>
          })}
          
        </ul>
      </div>
    );
  }
}

class HelloMessage extends Component {

  state = { date: new Date().toDateString(), list: ["Instagaram", "WhatsApp", "Oculus", "Skype"] };

  render() {
    return (
      <div>Hello {this.props.name} list: <ShoppingList list={this.state.list} name="Hamed"></ShoppingList></div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Hamed"></HelloMessage>,
  document.getElementById('watch-store')
);