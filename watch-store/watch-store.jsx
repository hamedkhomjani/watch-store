import React, { Component } from "react";
import ReactDOM from "react-dom";

class HelloMessage extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date().toDateString() };
  }

  render() {
    return (
      <div>
        Hello {this.props.name} Date: {this.state.date}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Hamed"></HelloMessage>,
  document.getElementById('watch-store')
);