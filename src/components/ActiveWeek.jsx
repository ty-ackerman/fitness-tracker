import React, { Component } from "react";
import SelectDay from "./SelectDay";

class ActiveWeek extends Component {
  render() {
    const { activeWeek, createDayPopupDisplay } = this.props;
    return (
      <div>
        <h1>{`Week ${activeWeek.week} Workout Plan`}</h1>
        <button onClick={this.props.backToSelectWeek}>Back</button>
        {activeWeek.workouts.length ? (
          <div>
            <h2>
              <span>Day</span>
              <span>Muscle Group</span>
            </h2>
            {activeWeek.workouts.map(day => {
              return (
                <SelectDay
                  day={day}
                  renderActiveDay={this.props.renderActiveDay}
                />
              );
            })}
          </div>
        ) : (
          <p>No Workouts Logged</p>
        )}
        {activeWeek.workouts.length === 7 ? null : (
          <button onClick={createDayPopupDisplay}>Add New Workout</button>
        )}
      </div>
    );
  }
}

export default ActiveWeek;
