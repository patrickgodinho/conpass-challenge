import {INSPECT_MODE } from "../types/inspect-types";

const initState = {
  inspectMode: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case INSPECT_MODE:
      return {...state, inspectMode: action.payload.inspectMode};
    default:
      return state;
  }
};


