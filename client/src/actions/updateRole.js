import axios from "axios";
import { UPDATE_ROLE_SUCCESS, UPDATE_ROLE_FAIL } from "./types";

// Update User Role
export const changeRole = user => async dispatch => {
  const id = user.key;
  const role = user.role;

  try {
    const res = await axios.put(`/api/users/${id}`, { role });
    res.data.role = role;
    dispatch({
      type: UPDATE_ROLE_SUCCESS,
      payload: user
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ROLE_FAIL,
      payload: error.message
    });
  }
};
