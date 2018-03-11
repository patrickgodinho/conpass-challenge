import {POINTS} from "../types/point-types";

const initState = {
  points: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case POINTS:
      return {...state, points: action.payload.points};
    default:
      return state;
  }
};


