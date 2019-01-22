import React, { Component } from "react";
import "./App.css";
import OngoingTodo from "./OngoingTodo.js";
import CompletedTodo from "./CompletedTodo.js";

class TodoItem extends Component {
  state = {
    ongoing: [],
    done: [],
    todo: ""
  };

  componentDidMount() {
    const storage = localStorage.getItem("todos");

    if (storage) {
      const todos = JSON.parse(storage);
      this.setState({
        ongoing: todos.ongoing,
        done: todos.done
      });
    }
  }

  addTodo = event => {
    event.preventDefault();

    const { ongoing, todo } = this.state;
    if(todo !== '') {
      const addTodos = ongoing;
      addTodos.push(todo);
      this.setState({
        ongoing: addTodos,
        todo: ""
      });
      this.saveToLocalStorage();
    }
  };

  saveToLocalStorage = () => {
    const { ongoing, done } = this.state;
    localStorage.setItem("todos", JSON.stringify({ ongoing, done }))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheck = value => {
    const { ongoing, done } = this.state;

    const removeTodo = ongoing;
    const index = removeTodo.indexOf(value);
    removeTodo.splice(index, 1);

    const completed = done;
    completed.push(value);

    this.setState({
      ongoing: removeTodo,
      done: completed
    });

    this.saveToLocalStorage();
  };

  render() {
    const { ongoing, done, todo } = this.state;

    return (
      <div className="container">
        <form className="input-group mt-3 mb-3" onSubmit={this.addTodo}>
          <input
            type="text"
            className="form-control"
            name="todo"
            value={todo}
            onChange={this.handleChange}
            placeholder="Add todo"
            aria-label="Add todo"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </form>
        <div
          className="d-flex justify-content-between mt-5"
          style={{ height: "73vh" }}
        >
          <div className="col bg-secondary mr-3 px-3 py-3 rounded text-light">
            <h3>Ongoing</h3>
            {ongoing.length === 0 && <em>You have not added any todos</em>}
            {ongoing.length !== 0 && (
              <OngoingTodo ongoing={ongoing} handlesCheck={this.handleCheck} />
            )}
          </div>
          <div className="col vh-90 bg-light ml-3 px-3 py-3 rounded">
            <h3>Done</h3>
            {done.length === 0 && <em>You have not completed any todos yet</em>}
            {done.length !== 0 && <CompletedTodo done={done} />}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
