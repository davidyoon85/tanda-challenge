import { RECEIVE_ORGANIZATION_ERRORS } from "../actions/organization_actions";

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ORGANIZATION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
