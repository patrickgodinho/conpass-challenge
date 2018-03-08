import {REMOVE_INFO, SET_INFO} from "../types/info-types";

export const removeInfo = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_INFO,
    })
  }
};
export const setInfo = text => {
  return dispatch => {
    dispatch({
      type: SET_INFO,
      payload: {
        text
      }
    })
  }
};