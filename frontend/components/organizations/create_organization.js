import React, { Component } from "react";

class CreateOrganization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      hourly_rate: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createOrganization(this.state);
  }

  render() {
    return (
      <div>
        <h2>Create Organization!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              required
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
            />
          </label>
          <label>
            Hourly Rate:
            <input
              required
              type="number"
              value={this.state.hourly_rate}
              onChange={this.handleChange("hourly_rate")}
            />
          </label>
          <button type="submit">Create Organization</button>
        </form>
      </div>
    );
  }
}

export default CreateOrganization;
