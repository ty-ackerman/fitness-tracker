import React, { Component } from "react";
import SelectExercise from "./SelectExercise"

class ActiveDay extends Component {
  renderMuscleGroupInTitle = () => {
    if (this.props.activeDay.muscleGroupSecondary) {
      return `${this.props.activeDay.muscleGroupPrimary} & ${
        this.props.activeDay.muscleGroupSecondary
      }`;
    }
    return `${this.props.activeDay.muscleGroupPrimary}`;
  };

  componentDidMount() {
    console.log("worked")
  }

  render() {
    const {
      backToSelectDay,
      activeDay,
      createExercisePopupDisplay
    } = this.props;
    return (
      <div>
        <h1>{`Day ${activeDay.day} - ${this.renderMuscleGroupInTitle()}`}</h1>
        <button onClick={backToSelectDay}>Back</button>
        <div>
          <h2><span>Exercise</span><span>Sets</span><span>Reps</span><span>Tempo</span></h2>
          {activeDay.exercises.length ? (
            activeDay.exercises.map(exercise => {
              return <SelectExercise exercise={exercise}/>;
            })
          ) : (
            <p>No Exercises Logged</p>
          )}
        </div>
        <button onClick={createExercisePopupDisplay}>Add Exercise</button>
      </div>
    );
  }
}

export default ActiveDay;
