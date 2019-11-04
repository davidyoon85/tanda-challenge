import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import organizations from "./organizations_errors_reducer";

export default combineReducers({
  session,
  organizations
});
