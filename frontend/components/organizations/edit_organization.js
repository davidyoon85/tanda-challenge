import React, { Component } from "react";

class EditOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      hourly_rate: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  componentWillUnmount() {
    this.setState({
      id: "",
      name: "",
      hourly_rate: ""
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDelete() {
    this.props
      .deleteOrganization(this.state.id)
      .then(() => this.props.history.push("/"));
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              required
              value={this.state.name}
              onChange={this.update("name")}
            />
          </label>
          <label>
            Hourly Rate:
            <input
              required
              value={this.state.hourly_rate}
              onChange={this.update("hourly_rate")}
            />
          </label>
          <button type="submit">Submit Changes</button>
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default EditOrganization;
