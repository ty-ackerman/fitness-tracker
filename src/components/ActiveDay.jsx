import React, { Component } from "react";

class ActiveDay extends Component {
  renderMuscleGroupInTitle = () => {
    if (this.props.activeDay.muscleGroupSecondary) {
      return `${this.props.activeDay.muscleGroupPrimary} & ${
        this.props.activeDay.muscleGroupSecondary
      }`;
    }
    return `${this.props.activeDay.muscleGroupPrimary}`;
  };

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
          {activeDay.exercises.length ? (
            activeDay.exercises.map(exercise => {
              return <div>This Exercise</div>;
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
