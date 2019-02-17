import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import SelectWeek from "./components/SelectWeek";
import Popup from "./components/Popup";
import ActiveWeek from "./components/ActiveWeek";
import ActiveDay from "./components/ActiveDay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayPopup: false,
      popupComponents: {
        createWeek: false,
        createDay: false,
        createExercise: false
      },
      displayComponents: {
        selectWeek: true,
        activeWeek: false,
        activeDay: false
      },
      weeks: [
        {
          week: 2,
          date: "2019-02-03",
          completed: false,
          workouts: [
            {
              day: 1,
              muscleGroupPrimary: "shoulders",
              muscleGroupSecondary: "traps",
              exercises: []
            },
            {
              day: 2,
              muscleGroupPrimary: "back",
              muscleGroupSecondary: "biceps",
              exercises: []
            }
          ]
        },
        { week: 1, date: "2019-01-27", completed: false, workouts: [] }
      ],
      activeWeek: {},
      activeDay: {}
    };
  }

  newWeekAdder = (weekNum, date) => {
    //This function will add a new week with no workouts logged/created
    const { weeks } = this.state;
    const newWeek = {
      week: parseInt(weekNum.value, 0),
      date: date.value,
      completed: false,
      workouts: []
    };
    weeks.unshift(newWeek);
    this.setState({ weeks });
    this.openOrClosePopup();
  };

  newDayAdder = (dayNum, primary, secondary) => {
    //This function will add a new day to the active week, as well as the object storing all the weeks
    const activeWeek = Object.assign({}, this.state.activeWeek);
    const newDay = {
      day: dayNum,
      muscleGroupPrimary: primary,
      muscleGroupSecondary: secondary,
      exercises: []
    };
    activeWeek.workouts.push(newDay);
    this.setState({ activeWeek });
    this.openOrClosePopup();
  };

  newExerciseAdder = (exercise, sets, reps, mods, tempo) => {
    // This function will add a new exercise to the active day
    const activeDay = Object.assign({}, this.state.activeDay)
    exercise = {
      exercise, sets, reps, mods, tempo
    }
    activeDay.exercises.push(exercise)
    console.log(activeDay)
    this.setState({activeDay})
    this.openOrClosePopup()
  }

  renderPopup = () => {
    //This function decideds whether the popup should be displayed.
    //Other functions will pass which data to display in the popup
    // this.setState({ displayPopup: true });
    if (this.state.displayPopup) {
      return (
        <Popup
          openOrClosePopup={this.openOrClosePopup}
          popupComponents={this.state.popupComponents}
          weeks={this.state.weeks}
          newWeekAdder={this.newWeekAdder}
          newDayAdder={this.newDayAdder}
          newExerciseAdder={this.newExerciseAdder}
          activeWeek={this.state.activeWeek}
          activeDay={this.state.activeDay}
        />
      );
    }
  };

  renderComponents = () => {
    const { selectWeek, activeWeek, activeDay } = this.state.displayComponents;
    if (selectWeek) {
      return (
        <SelectWeek
          createWeekPopUpDisplay={this.createWeekPopUpDisplay}
          weeks={this.state.weeks}
          renderActiveWeek={this.renderActiveWeek}
        />
      );
    } else if (activeWeek) {
      return (
        <ActiveWeek
          activeWeek={this.state.activeWeek}
          createDayPopupDisplay={this.createDayPopupDisplay}
          backToSelectWeek={this.backToSelectWeek}
          renderActiveDay={this.renderActiveDay}
        />
      );
    } else if (activeDay) {
      return (
        <ActiveDay
          backToSelectDay={this.backToSelectDay}
          activeDay={this.state.activeDay}
          createExercisePopupDisplay={this.createExercisePopupDisplay}
        />
      );
    }
  };

  clearPopupComponents = () => {
    const popupComponents = Object.assign({}, this.state.popupComponents);
    Object.keys(popupComponents).map(
      component => (popupComponents[component] = false)
    );
    this.setState({ popupComponents });
  };

  openOrClosePopup = () => {
    //This function changes the state of displayPopup from true to false or visa versa
    const displayPopup = this.state.displayPopup;
    if (displayPopup) {
      this.setState({ displayPopup: !displayPopup });
      this.clearPopupComponents();
    } else {
      this.setState({ displayPopup: !displayPopup });
    }
  };

  createWeekPopUpDisplay = () => {
    //This will update the popupComponents state and display the CreateWeek component

    this.openOrClosePopup();
    const popupComponents = Object.assign({}, this.state.popupComponents);
    popupComponents.createWeek = true;
    this.setState({ popupComponents });
  };

  createDayPopupDisplay = () => {
    //This will update the popupComponents state and display the CreateDay component

    this.openOrClosePopup();
    const popupComponents = Object.assign({}, this.state.popupComponents);
    popupComponents.createDay = true;
    this.setState({ popupComponents });
  };

  createExercisePopupDisplay = () => {
    // When this function is called, it will add a new exercise to whatever day is active
    this.openOrClosePopup();
    const popupComponents = Object.assign({}, this.state.popupComponents);
    popupComponents.createExercise = true;
    this.setState({ popupComponents });
  };

  renderActiveWeek = weekSelected => {
    // This function will be called once a week is selected and whill change the state of the active week
    //It will also change the state of displayComponents.selectWeek to false and make the state of displayComponents.activeWeek to true
    const displayComponents = Object.assign({}, this.state.displayComponents);
    displayComponents.selectWeek = false;
    displayComponents.activeWeek = true;
    this.setState({
      activeWeek: weekSelected,
      displayComponents
    });
  };

  renderActiveDay = daySelected => {
    // this function will change the active day to whatever day is selected
    const displayComponents = Object.assign({}, this.state.displayComponents);
    displayComponents.activeWeek = false;
    displayComponents.activeDay = true;
    this.setState({
      activeDay: daySelected,
      displayComponents
    });
  };

  backToSelectWeek = () => {
    //This function will act as a back button to bring the user back to the SelectWeek component
    const displayComponents = Object.assign({}, this.state.displayComponents);
    displayComponents.selectWeek = true;
    displayComponents.activeWeek = false;
    this.setState({ displayComponents });
  };

  backToSelectDay = () => {
    // This function will act as a back button to bring the user back to the SelectDay component
    const displayComponents = Object.assign({}, this.state.displayComponents);
    displayComponents.selectWeek = false;
    displayComponents.activeDay = false;
    displayComponents.activeWeek = true;
    this.setState({ displayComponents });
  };

  render() {
    return (
      <div className="App">
        {this.renderComponents()}
        {this.renderPopup()}
      </div>
    );
  }
}

export default App;
