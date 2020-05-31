import React, { Component } from "react";
import "./logo.css";

export default class Logo extends Component {
    render() {
        return (
            <img className="logo" src="/assets/logos/tissot.svg" alt="Tissot" />
        );
    }
}