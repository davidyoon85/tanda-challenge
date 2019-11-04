import React, { Component } from "react";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
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
    let password_reset_token = this.props.match.params.id;
    let data = { password: this.state.password, password_reset_token };
    this.props.resetPassword(data).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Reset your password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.update("password")}
          ></input>
          <button type="submit">Send email</button>
        </label>
      </form>
    );
  }
}

export default ResetPassword;
