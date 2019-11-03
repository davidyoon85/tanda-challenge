import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchOrganizations,
  createOrganization,
  updateOrganization,
  joinOrganization,
  leaveOrganization
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
    let currentUser = Object.values(this.props.state.entities.users)[0];
    debugger;
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
                {currentUser.organization_id ? (
                  <span
                    onClick={() =>
                      this.props.leaveOrganization(organization.id)
                    }
                  >
                    Leave
                  </span>
                ) : (
                  <span
                    onClick={() => this.props.joinOrganization(organization.id)}
                  >
                    Join
                  </span>
                )}
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
      dispatch(updateOrganization(organization)),
    joinOrganization: organizationId =>
      dispatch(joinOrganization(organizationId)),
    leaveOrganization: organizationId =>
      dispatch(leaveOrganization(organizationId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
