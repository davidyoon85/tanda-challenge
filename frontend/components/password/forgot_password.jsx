import React, { Component } from "react";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.resetEmail(this.state.email);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter your email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
          ></input>
          <button type="submit">Send email</button>
        </label>
      </form>
    );
  }
}

export default ForgotPassword;
