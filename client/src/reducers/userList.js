import {
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "../actions/types";

const initialState = { users: [], error: false };

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_SUCCESS:
      return { ...state, users: payload, error: false };
    case USER_LIST_FAIL:
      return { ...state, error: true };
    case UPDATE_ROLE_SUCCESS:
      const usersArray = [...state.users];
      const userIndex = usersArray.findIndex(user => user._id === payload.key);
      usersArray[userIndex].role = payload.role;
      return { ...state, users: [...usersArray], error: false };
    case UPDATE_ROLE_FAIL:
      return { ...state, error: true };
    case DELETE_USER_SUCCESS:
      const users = [...state.users];
      const user = users.findIndex(user => user._id === payload._id);
      users.splice(user, 1);
      return { ...state, users: [...users], error: false };
    case DELETE_USER_FAIL:
      console.log("delete fail");
      return { ...state, error: true };

    default:
      return state;
  }
}
