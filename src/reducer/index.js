import { combineReducers } from 'redux';

const crypto = (state = null, action) => {
  switch(action.type) {
    case 'ACTION_THING':
      return true;
    default:
      return state; 
  }
}

const store = combineReducers({
  crypto
})

export default store;
