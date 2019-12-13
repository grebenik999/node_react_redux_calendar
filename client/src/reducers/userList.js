import { USER_LIST_SUCCESS, USER_LIST_FAIL } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_SUCCESS:
      return [...state, ...payload];
    case USER_LIST_FAIL:
      return [...state, ...payload];

    default:
      return state;
  }
}
