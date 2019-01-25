import React, { Component } from "react";
import reactDOM from "react-dom";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      title: "Container"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default Container;
