import React, { Component } from "react";
import CreateWeek from "./CreateWeek";
import CreateDay from "./CreateDay";
import CreateExercise from "./CreateExercise";

class Popup extends Component {
  render() {
    const {
      createWeek,
      createDay,
      createExercise
    } = this.props.popupComponents;
    return (
      <>
        <div>Popup Open</div>
        <div className="popup-components">
          {createWeek ? (
            <CreateWeek
              weeks={this.props.weeks}
              newWeekAdder={this.props.newWeekAdder}
            />
          ) : null}
        </div>
        <div className="popup-components">
          {createDay ? (
            <CreateDay
              weeks={this.props.weeks}
              newWeekAdder={this.props.newWeekAdder}
              activeWeek={this.props.activeWeek}
              newDayAdder={this.props.newDayAdder}
            />
          ) : null}
        </div>
        <div className="popup-components">
          {createExercise ? (
            <CreateExercise activeDay={this.props.activeDay} newExerciseAdder={this.props.newExerciseAdder} />
          ) : null}
        </div>
        <div>
          <button onClick={this.props.openOrClosePopup}>X</button>
        </div>
      </>
    );
  }
}

export default Popup;
