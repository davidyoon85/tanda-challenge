import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
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
    this.props.signup(this.state).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div>
        <h2>Sign up!</h2>
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
            Email:
            <input
              required
              type="email"
              value={this.state.email}
              onChange={this.handleChange("email")}
            />
          </label>
          <label>
            Password:
            <input
              required
              minLength="6"
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </label>
          <label>
            Confirm Password:
            <input
              required
              minLength="6"
              type="password"
              value={this.state.password_confirmation}
              onChange={this.handleChange("password_confirmation")}
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
