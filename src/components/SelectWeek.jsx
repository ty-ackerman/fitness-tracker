import "../App.css";
import React, { Component } from "react";

class SelectWeek extends Component {
  render() {
    const { weeks, renderActiveWeek } = this.props;
    return (
      <section className="select-week">
        <h1>Select Week</h1>
        <div>
          <button onClick={this.props.createWeekPopUpDisplay}>
            Create Week
          </button>
        </div>
        <div className="select-weeks-table">
          <div className="select-weeks__left">
            <h1>Week Number</h1>
            {weeks.map(week => {
              return (
                <div>
                  <p>{week.week}</p>
                </div>
              );
            })}
          </div>
          <div className="select-weeks__right">
            <h1>Start Date</h1>
            {weeks.map(week => {
              return (
                <div>
                  <p>
                    {week.date}
                    <button onClick={() => renderActiveWeek(week)}>
                      Select Week
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default SelectWeek;
