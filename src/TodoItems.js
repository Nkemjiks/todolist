import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import OngoingTodo from "./OngoingTodo.js";
import CompletedTodo from "./CompletedTodo.js";

class TodoItem extends Component {
  state = {
    todo: ""
  };

  componentDidMount() {
    const storage = localStorage.getItem("todos");

    if (storage) {
      const todos = JSON.parse(storage);
      this.props.store.updateState(todos);
    }
  }

  addTodo = event => {
    event.preventDefault();

    const { todo } = this.state;
    if (todo !== "") {
      this.props.store.pushTodo(todo);
      this.setState({
        todo: ""
      });
    }
  };

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  render() {
    const { todo } = this.state;
    const { store } = this.props;

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
            {store.ongoingTodo.length === 0 ? (
              <em>You have not added any todos</em>
            ) : (
              <OngoingTodo
                store={store}
                ongoing={store.ongoingTodo}
                handlesCheck={this.handleCheck}
              />
            )}
          </div>
          <div className="col vh-90 bg-light ml-3 px-3 py-3 rounded">
            <h3>Done</h3>
            {store.completedTodo.length === 0 ? (
              <em>You have not completed any todos yet</em>
            ) : (
              <CompletedTodo done={store.completedTodo} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

TodoItem = observer(TodoItem);

export default TodoItem;
