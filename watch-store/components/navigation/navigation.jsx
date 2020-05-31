import React, { Component } from "react";
import "./navigation.css";

export default class Navigation extends Component {
    render() {
        return (
        <nav className="navigation">{this.props.children}</nav>
        );
    }
}