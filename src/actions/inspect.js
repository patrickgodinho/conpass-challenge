import {INSPECT_MODE} from "../types/inspect-types";
import {REMOVE_INFO}from '../types/info-types'
export const inspectModeOn = () => {
  return dispatch => {
    dispatch({
      type: INSPECT_MODE,
      payload: {inspectMode: true}
    })
  }
};
export const inspectModeOff = () => {
  return dispatch => {
    dispatch({
      type: INSPECT_MODE,
      payload: {inspectMode: false}
    });
    dispatch({
      type:REMOVE_INFO
    })
  }
};
