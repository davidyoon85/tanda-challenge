import { connect } from "react-redux";
import { createOrganization } from "../../actions/organization_actions";
import CreateOrganization from "./create_organization";

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  createOrganization: organization => dispatch(createOrganization(organization))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrganization);
