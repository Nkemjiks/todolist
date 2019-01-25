import React, { Component } from "react";
import Navbar from "./Navbar.js";
import TodoItem from "./TodoItems.js";
import "./App.css";
import appstore from "./appstore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TodoItem store={appstore} />
      </div>
    );
  }
}

export default App;
