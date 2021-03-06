import { connect } from "react-redux";
import {
  fetchShifts,
  createShift,
  deleteShift
} from "../../actions/shift_actions";
import Shifts from "./shifts";

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    shifts: Object.values(state.entities.shifts).filter(
      obj => obj.organization_id === parseInt(ownProps.match.params.id)
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchShifts: () => dispatch(fetchShifts()),
    createShift: shift => dispatch(createShift(shift)),
    deleteShift: id => dispatch(deleteShift(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shifts);
