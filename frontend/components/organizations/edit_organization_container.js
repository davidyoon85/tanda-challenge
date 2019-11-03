import { connect } from "react-redux";
import {
  fetchOrganization,
  updateOrganization,
  deleteOrganization
} from "../../actions/organization_actions";
import EditOrganization from "./edit_organization";
import { withRouter } from "react-router";

const mapStateToProps = state => ({
  organization: Object.values(state.entities.organizations)[0]
});

const mapDispatchToProps = dispatch => ({
  fetchOrganization: organizationId =>
    dispatch(fetchOrganization(organizationId)),
  updateOrganization: organization =>
    dispatch(updateOrganization(organization)),
  deleteOrganization: organizationId =>
    dispatch(deleteOrganization(organizationId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditOrganization));
