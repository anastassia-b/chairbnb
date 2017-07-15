import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from '../middleware/thunk_middleware';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, logger)
  )
);

export default configureStore;
