import axios from "axios";
import { USER_LIST_SUCCESS, USER_LIST_FAIL } from "./types";

//Get All Users from DB
export const fetchUsers = () => async dispatch => {
  try {
    const res = await axios.get("/api/users");
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    const err = error.message;
    dispatch({
      type: USER_LIST_FAIL,
      payload: err
    });
  }
};
