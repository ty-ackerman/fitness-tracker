import React, { Component } from "react";

class SelectDay extends Component {
  render() {
    const { day, createDayPopupDisplay } = this.props;
    return (
      <div>
        <div className="day__row">
          <span>{day.day}</span>
          <span>{day.muscleGroupPrimary}</span>
          <span>{day.muscleGroupSecondary}</span>
          <button onClick={() => this.props.renderActiveDay(day)}>
            Select Day
          </button>
        </div>
      </div>
    );
  }
}

export default SelectDay;
