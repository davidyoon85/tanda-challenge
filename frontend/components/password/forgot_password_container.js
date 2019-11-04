import { connect } from "react-redux";
import { withRouter } from "react-router";
import { resetEmail } from "../../actions/session_actions";
import ForgotPassword from "./forgot_password";

const mapDispatchToProps = dispatch => {
  return {
    resetEmail: email => dispatch(resetEmail(email))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ForgotPassword)
);
