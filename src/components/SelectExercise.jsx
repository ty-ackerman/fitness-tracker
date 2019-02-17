import React, { Component } from "react";

class SelectExercise extends Component {
  render() {
    const {exercise, sets, reps, mods, tempo} = this.props.exercise
    return (
      <div>
        {mods === "none" ? <span>{exercise}</span> : <span>{exercise} - {mods}</span>}
        <span>{sets}</span>
        <span>{reps}</span>
        <span>{tempo}</span>

      </div>
    );
  }
}

export default SelectExercise;
