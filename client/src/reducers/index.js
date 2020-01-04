import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import userList from "./userList";
import removeUser from "./userList";
import regions from "./region.reducer";
import areasByRegion from "./area.reducer";

export default combineReducers({
  alert,
  auth,
  userList,
  removeUser,
  regions,
  areasByRegion
});
