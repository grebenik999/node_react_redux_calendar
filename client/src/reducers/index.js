import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import userList from "./userList";

export default combineReducers({
  alert,
  auth,
  userList
});
