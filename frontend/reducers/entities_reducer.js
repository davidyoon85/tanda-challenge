import { combineReducers } from "redux";
import users from "./users_reducer";
import organizations from "./organizations_reducer";
import shifts from "./shifts_reducer";

export default combineReducers({
  users,
  organizations,
  shifts
});
