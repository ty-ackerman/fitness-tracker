import React, { Component } from "react";

class CreateDay extends Component {
  newestDay = () => {
    if (this.props.activeWeek.workouts.length) {
      const workoutsListed = this.props.activeWeek.workouts.length;
      return parseInt(
        this.props.activeWeek.workouts[workoutsListed - 1].day,
        0
      );
    }
    return 0;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dayNum, primary, secondary } = this.refs;
    this.props.newDayAdder(dayNum.value, primary.value, secondary.value);
  };

  render() {
    const { activeWeek } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Day:
            <input
              type="number"
              name="dayNum"
              defaultValue={this.newestDay() + 1}
              ref="dayNum"
              required
            />
          </label>
          <label>
            Primary Muscle Group:
            <input
              type="text"
              ref="primary"
              required
              defaultValue="test"
              placeholder="REQUIRED - Primary Muscle"
            />
          </label>
          <label>
            Secondary Muscle Group:
            <input
              type="text"
              ref="secondary"
              placeholder="OPTIONAL - Secondary Muscle"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateDay;
