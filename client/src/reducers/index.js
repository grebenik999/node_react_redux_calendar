import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import users from "./userList";

export default combineReducers({
  alert,
  auth,
  users
});
