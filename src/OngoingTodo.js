import React, { Component } from "react";

class OngoingTodo extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = event => {
    event.persist();
    const { handlesCheck } = this.props;
    handlesCheck(event.target.value);
  };

  render() {
    const { ongoing } = this.props;
    return ongoing.map((value, index) => (
      <div className="form-check" key={index}>
        <input
          className="form-check-input"
          value={value}
          onClick={this.toggleCheckboxChange}
          type="checkbox"
          id="defaultCheck1"
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {value}
        </label>
      </div>
    ));
  }
}

export default OngoingTodo;
