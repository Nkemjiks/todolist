import React, { Component } from "react";

class OngoingTodo extends Component {
  toggleCheckboxChange = event => {
    event.persist();
    this.props.store.updateTodo(event.target.value);
  };

  render() {
    const { ongoing } = this.props;
    return ongoing.map((value, index) => (
      <div className="form-check" key={index}>
        <input
          className="form-check-input"
          value={value.item}
          checked={value.completed}
          onChange={this.toggleCheckboxChange}
          type="checkbox"
          id="defaultCheck1"
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {value.item}
        </label>
      </div>
    ));
  }
}

export default OngoingTodo;
