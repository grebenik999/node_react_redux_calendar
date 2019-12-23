import axios from "axios";
import {
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "./types";

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

// Update Role action

// Delete User action
export const deleteUser = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/users/${id}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.message
    });
  }
};
