import {POINTS} from "../types/point-types";

export const addPoint = (point) => {
  const currentPoints = localStorage.getItem("points") || JSON.stringify([]);
  const points = JSON.parse(currentPoints);
  points.push(point);
  localStorage.setItem("points", JSON.stringify(points));
  return dispatch => {
    dispatch({
      type: POINTS,
      payload: {
        points
      }
    })
  }
};

export const removePoint = (point) => {
  const currentPoints = JSON.parse(localStorage.getItem("points"));
  const points = currentPoints.filter(p => p.x !== point.x && p.y !== point.y);
  localStorage.setItem("points", JSON.stringify(points));
  return dispatch => {
    dispatch({
      type: POINTS,
      payload: {
        points
      }
    })
  }
};

export const getPoints = () => {
  const currentPoints = localStorage.getItem("points") || JSON.stringify([]);
  const points = JSON.parse(currentPoints);
  return dispatch => {
    dispatch({
      type: POINTS,
      payload: {
        points
      }
    })
  }
};