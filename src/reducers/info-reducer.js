import {SET_INFO, REMOVE_INFO} from "../types/info-types";

const initState = {
  text: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_INFO:
      return {...state, text: action.payload.text};
    case REMOVE_INFO:
      return {...state, text: initState.text};
    default:
      return state;
  }
};