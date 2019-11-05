import React, { Component } from "react";
import * as moment from "moment";

class Shifts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
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

  handleDelete(id) {
    this.props.deleteShift(id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let organization_id = parseInt(this.props.match.params.id);
    let user_id = this.props.state.session.id;
    let start = this.state.date + " " + this.state.start;
    let finish = this.state.date + " " + this.state.finish;
    let newShift = { ...this.state, start, finish, organization_id, user_id };
    this.props.createShift(newShift);
  }

  renderTableData() {
    return this.props.shifts
      .sort((a, b) => new Date(b.start) - new Date(a.start))
      .map((shift, idx) => {
        let shiftStart = new moment(shift.start);
        let shiftEnd = new moment(shift.finish);
        let breakTime = shift.break_length / 60;
        let shiftDiff = shiftEnd.diff(shiftStart, "hours", true) - breakTime;
        let shiftCost =
          "$" +
          parseFloat(shiftDiff * shift.organization.hourly_rate).toFixed(2);

        return (
          <tr key={idx}>
            <td>{shift.user.name}</td>
            <td>{moment(shiftStart).format("MM/DD/YYYY")}</td>
            <td>{moment(shiftStart).format("h:mm A")}</td>
            <td>{moment(shiftEnd).format("h:mm A")}</td>
            <td>{shift.break_length}</td>
            <td>{shiftDiff}</td>
            <td>{shiftCost}</td>
            <td>
              <button onClick={() => this.handleDelete(shift.id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      });
  }

  render() {
    return (
      <div>
        {this.props.shifts.length > 0 && (
          <div>
            <h2>{this.props.shifts[0].organization.name}</h2>
            <h2>Shifts</h2>
            <table className="shifts-table">
              <tbody>
                <tr>
                  <th>Employee Name</th>
                  <th>Shift Date</th>
                  <th>Start Time</th>
                  <th>Finish Time</th>
                  <th>Break Length (minutes)</th>
                  <th>Hours Worked</th>
                  <th>Shift Cost</th>
                </tr>
                {this.renderTableData()}
              </tbody>
            </table>
          </div>
        )}
        <h2>Create Shift</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input
              required
              type="date"
              value={this.state.date}
              onChange={this.handleChange("date")}
            />
          </label>
          <label>
            Start:
            <input
              required
              type="time"
              value={this.state.start}
              onChange={this.handleChange("start")}
            />
          </label>
          <label>
            Finish:
            <input
              required
              type="time"
              value={this.state.finish}
              onChange={this.handleChange("finish")}
            />
          </label>
          <label>
            Break Length:
            <input
              required
              type="number"
              value={this.state.break_length}
              onChange={this.handleChange("break_length")}
            />
          </label>
          <button type="submit">Create Shift</button>
        </form>
      </div>
    );
  }
}

export default Shifts;
