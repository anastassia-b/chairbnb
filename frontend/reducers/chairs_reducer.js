import merge from 'lodash/merge';

import { RECEIVE_CHAIR, RECEIVE_CHAIRS } from '../actions/chair_actions';

const ChairsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CHAIRS:
      return action.chairs;
    case RECEIVE_CHAIR:
      const newChair = {[action.chair.id]: action.chair};
      return merge({}, state, newChair);
    default:
      return state;
  }
};

export default ChairsReducer;
