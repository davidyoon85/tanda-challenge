import { combineReducers } from "redux";
import users from "./users_reducer";
import organizations from "./organizations_reducer";

export default combineReducers({
  users,
  organizations
});
