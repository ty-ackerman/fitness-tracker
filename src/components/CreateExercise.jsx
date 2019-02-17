import React, { Component } from "react";

class CreateExercise extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const tempo = this.formatTempo()
    const {exercise, sets, reps, mods} = this.refs
    this.props.newExerciseAdder(exercise.value, sets.value, reps.value, mods.value, tempo)
  };

  formatTempo = () => {
    return `${this.refs.tempo1.value}-${this.refs.tempo2.value}-${
      this.refs.tempo3.value
    }-${this.refs.tempo4.value}`;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Exercise:
            <input type="text" name="exercise" ref="exercise" required defaultValue="Chinup"/>
          </label>
          <label>
            Sets:
            <input type="number" ref="sets" required defaultValue={3}/>
          </label>
          <label>
            Reps:
            <input type="number" ref="reps" required defaultValue={3}/>
          </label>
          <label>
            Modifications:
            <select ref="mods">
              <option value="none">None</option>
              <option value="mod1">Mod1</option>
              <option value="mod2">Mod2</option>
              <option value="mod3">Mod3</option>
            </select>
          </label>
          <label>
            Tempo:
            <input
              type="number"
              ref="tempo1"
              required
              placeholder="Eccentric"
              defaultValue={3}
            />
            <input
              type="number"
              ref="tempo2"
              required
              placeholder="Pause (Midpoint)"
              defaultValue={3}
            />
            <input
              type="number"
              ref="tempo3"
              required
              placeholder="Concentric"
              defaultValue={3}
            />
            <input
              type="number"
              ref="tempo4"
              required
              placeholder="Pause (Top)"
              defaultValue={3}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateExercise;
