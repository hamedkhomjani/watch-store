import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
    render() {
        return (
        <header className="header">{this.props.children}</header>
        );
    }
}