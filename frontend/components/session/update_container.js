import { connect } from "react-redux";
import { updateUser } from "../../actions/session_actions";
import Reset from "./update";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: Object.values(state.entities.users).filter(
      obj => obj.id === state.session.id
    )[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);
