import React, { Component } from "react";

class CreateWeek extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { weekNum, date } = this.refs;
    this.props.newWeekAdder(weekNum, date);
  };

  getDate = () => {
    const curr = new Date();
    curr.setDate(curr.getDate() - 1);
    const today = curr.toISOString().substr(0, 10);
    return today;
  };

  render() {
    const { weeks } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Week Number:
            <input
              type="number"
              name="weekNum"
              defaultValue={weeks[0].week + 1}
              ref="weekNum"
              required
            />
          </label>
          <label>
            Starting Date:
            <input
              type="date"
              ref="date"
              required
              defaultValue={this.getDate()}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateWeek;
