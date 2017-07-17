import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ChairsReducer from './chairs_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  chairs: ChairsReducer
});

export default rootReducer;
