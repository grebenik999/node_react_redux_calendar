import axios from "axios";
import {
  CREATE_REGION_SUCCESS,
  CREATE_REGION_FAIL,
  GET_REGION_SUCCESS,
  GET_REGION_FAIL,
  CREATE_AREA_SUCCESS,
  CREATE_AREA_FAIL,
  GET_AREA_SUCCESS,
  GET_AREA_FAIL,
  CREATE_SHOP_SUCCESS
} from "./types";

// Create Region
export const createRegion = name => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(name);

  try {
    const res = await axios.post("/api/location/region", body, config);
    dispatch({
      type: CREATE_REGION_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    const err = error.message;
    dispatch({
      type: CREATE_REGION_FAIL,
      payload: "Unpossible create a new Region " + err
    });
  }
};

// Get all the Regions
// http://localhost:5000/api/location/region
export const getRegionsList = () => async dispatch => {
  try {
    const res = await axios.get("/api/location/region");
    dispatch({
      type: GET_REGION_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    const err = error.message;
    dispatch({
      type: GET_REGION_FAIL,
      payload: err
    });
  }
};

// Get all tha Area from Region
// http://localhost:5000/api/location/region/area
export const getAreaByRegion = id => async dispatch => {
  try {
    const res = await axios.get(`/api/location/region/${id}/area`);
    dispatch({
      type: GET_AREA_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    const err = error.message;
    dispatch({
      type: GET_REGION_FAIL,
      payload: err
    });
  }
};
