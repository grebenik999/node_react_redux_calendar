import {
  CREATE_REGION_SUCCESS,
  CREATE_REGION_FAIL,
  GET_REGION_SUCCESS,
  GET_REGION_FAIL,
  CREATE_AREA_SUCCESS,
  CREATE_SHOP_SUCCESS
} from "../actions/types";

const initialState = { regions: [], error: false };

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_REGION_SUCCESS:
      return { ...state, regions: [{ ...payload }], error: false };
    case CREATE_REGION_FAIL:
      console.log("Error reducer");
      return { ...state, payload: payload, error: true };
    case GET_REGION_SUCCESS:
      return { ...state, regions: [...payload], error: false };
    case GET_REGION_FAIL:
      return { ...state, error: true };
    default:
      return state;
  }
}
