import { connect } from "react-redux";
import { withRouter } from "react-router";
import { resetPassword } from "../../actions/session_actions";
import ResetPassword from "./reset_password";

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: id => dispatch(resetPassword(id))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ResetPassword)
);
