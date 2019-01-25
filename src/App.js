import React, { Component } from "react";
import Container from "./components/layout/Container";
import Nav from "./components/layout/Nav";
import ReactDOM from "react-dom";
import "./styles/App.css";
import faces from "./images/faces.PNG";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container />
        <img src={faces} alt="faces" />
      </div>
    );
  }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
export default App;
