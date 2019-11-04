import React, { Component } from "react";

class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.currentUser);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h2>Update Your Account!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a New Name:
            <input
              required
              minLength="1"
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
            />
          </label>
          <label>
            Enter a New Email:
            <input
              required
              minLength="1"
              type="email"
              value={this.state.email}
              onChange={this.handleChange("email")}
            />
          </label>
          <label>
            Enter a New Password:
            <input
              required
              minLength="6"
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </label>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default Reset;
