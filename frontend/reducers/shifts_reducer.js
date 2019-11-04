import {
  RECEIVE_SHIFTS,
  RECEIVE_SHIFT,
  REMOVE_SHIFT,
  RECEIVE_SHIFT_ERRORS
} from "../actions/shift_actions";
import merge from "lodash/merge";

const shiftsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SHIFTS:
      return action.shifts;
    case RECEIVE_SHIFT:
      return merge({}, state, action.shift);
    case REMOVE_SHIFT:
      let newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default shiftsReducer;
