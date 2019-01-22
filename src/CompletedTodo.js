import React from "react";

const CompletedTodo = props =>
  props.done.map((value, index) => (
    <div className="form-check" key={index}>
      <input
        className="form-check-input"
        type="checkbox"
        id="defaultCheck2"
        disabled
        checked
      />
      <label
        className="form-check-label"
        htmlFor="defaultCheck2"
        style={{ textDecoration: "line-through" }}
      >
        {value}
      </label>
    </div>
  ));

export default CompletedTodo;
