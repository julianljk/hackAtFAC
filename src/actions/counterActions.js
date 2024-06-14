export const SET_SLIDER_VALUE = "SET_SLIDER_VALUE";
export const ADD_TO_COUNTER = "ADD_TO_COUNTER";

export function setSliderValue(value) {
  return {
    type: SET_SLIDER_VALUE,
    value,
  };
}

export function addToCounter() {
  return {
    type: ADD_TO_COUNTER,
  };
}
