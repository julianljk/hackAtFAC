import { combineReducers } from 'redux';
import * as CounterActions from '../actions/counterActions.js';

// const crypto = (state = null, action) => {
//   switch(action.type) {
//     case 'ACTION_THING':
//       return true;
//     default:
//       return state; 
//   }
// }

function counter(state = { counter: 0, sliderValue: 0 }, action) {
  switch(action.type) {
    case CounterActions.SET_SLIDER_VALUE: 
      return Object.assign({}, state, { sliderValue: action.value })
    case CounterActions.ADD_TO_COUNTER: 
      return Object.assign({}, state, { counter: state.counter + state.sliderValue });
    default: 
      return state; 
  }
}

const store = combineReducers({
  counter
})

export default store;
