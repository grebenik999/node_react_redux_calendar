import {
  CREATE_AREA_SUCCESS,
  CREATE_AREA_FAIL,
  GET_AREA_SUCCESS,
  GET_AREA_FAIL
} from "../actions/types";

const initialState = { areas: [], error: false };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_AREA_SUCCESS:
      return { ...state, areas: [...payload], error: false };
    case GET_AREA_FAIL:
      console.log("Error reducer");
      break;
    default:
      return state;
  }
}
