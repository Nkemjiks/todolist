import React, { Component } from "react";
import Navbar from "./Navbar.js";
import TodoItem from "./TodoItems.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TodoItem />
      </div>
    );
  }
}

export default App;
