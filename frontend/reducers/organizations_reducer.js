import {
  RECEIVE_ORGANIZATIONS,
  RECEIVE_ORGANIZATION,
  REMOVE_ORGANIZATION
} from "../actions/organization_actions";
import merge from "lodash/merge";

const organizationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ORGANIZATIONS:
      return action.organizations;
    case RECEIVE_ORGANIZATION:
      return merge({}, state, action.organization);
    case REMOVE_ORGANIZATION:
      let newState = merge({}, state);
      delete newState[action.organizationId];
      return newState;
    default:
      return state;
  }
};

export default organizationsReducer;
