import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchOrganizations,
  createOrganization,
  updateOrganization
} from "../actions/organization_actions";
import CreateOrganization from "./organizations/create_organization_container";

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchOrganizations();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let organizations = Object.values(this.props.state.entities.organizations);

    return (
      <div>
        <h1>Organizations</h1>
        <ul>
          {organizations.length > 0 &&
            organizations.map(organization => (
              <li key={organization.id}>
                {organization.name}
                <span
                  onClick={() =>
                    this.props.history.push(`/organizations/${organization.id}`)
                  }
                >
                  Edit
                </span>
                <span>Join</span>
              </li>
            ))}
        </ul>
        <CreateOrganization />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrganizations: () => dispatch(fetchOrganizations()),
    createOrganization: organization =>
      dispatch(createOrganization(organization)),
    updateOrganization: organization =>
      dispatch(updateOrganization(organization))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
