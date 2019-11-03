import React, { Component } from "react";

class EditOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hourly_rate: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchOrganization(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState(this.props.organization);
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateOrganization(this.state).then(() => this.goBack());
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <h2>hi</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input value={this.state.name} onChange={this.update("name")} />
          </label>
          <label>
            Hourly Rate:
            <input
              value={this.state.hourly_rate}
              onChange={this.update("hourly_rate")}
            />
          </label>
          <button type="submit">Submit Changes</button>
        </form>
      </div>
    );
  }
}

export default EditOrganization;
