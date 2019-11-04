import React, { Component } from "react";
import * as moment from "moment";

class Shifts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: "",
      finish: "",
      break_length: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchShifts();
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let organization_id = parseInt(this.props.match.params.id);
    let user_id = this.props.state.session.id;
    let newShift = { ...this.state, organization_id, user_id };
    this.props.createShift(newShift);
  }

  render() {
    return (
      <div>
        {this.props.shifts.length > 0 && (
          <ul>
            {this.props.shifts.map(shift => {
              let shiftStart = new moment(shift.start);
              let shiftEnd = new moment(shift.finish);
              let breakTime = shift.break_length / 60;
              let shiftDiff =
                shiftEnd.diff(shiftStart, "hours", true) - breakTime;
              let shiftCost =
                "$" +
                parseFloat(shiftDiff * shift.organization.hourly_rate).toFixed(
                  2
                );

              return (
                <li key={shift.id}>
                  {shift.user.name}
                  {moment(shiftStart).format("MM/DD/YYYY")}
                  {moment(shiftStart).format("h:mm A")}
                  {moment(shiftEnd).format("h:mm A")}
                  {shift.break_length}
                  {shiftDiff}
                  {shiftCost}
                </li>
              );
            })}
          </ul>
        )}
        <h2>Create Shift!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Start:
            <input
              type="time"
              value={this.state.start}
              onChange={this.handleChange("start")}
            />
          </label>
          <label>
            Finish:
            <input
              type="time"
              value={this.state.finish}
              onChange={this.handleChange("finish")}
            />
          </label>
          <label>
            Break Length:
            <input
              type="number"
              value={this.state.break_length}
              onChange={this.handleChange("break_length")}
            />
          </label>
          <button onClick={this.handleSubmit}>Create Shift</button>
        </form>
      </div>
    );
  }
}

export default Shifts;
