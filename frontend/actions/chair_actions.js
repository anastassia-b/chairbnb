import * as APIUtil from '../util/chair_api_util';

export const RECEIVE_CHAIR = 'RECEIVE_CHAIR';
export const RECEIVE_CHAIRS = 'RECEIVE_CHAIRS';

export const receiveChairs = chairs => ({
  type: RECEIVE_CHAIRS,
  chairs
});

export const receiveChair = chair => ({
  type: RECEIVE_CHAIR,
  chair
});

export const fetchChairs = () => dispatch => (
  APIUtil.fetchChairs().then(chairs => (
    dispatch(receiveChairs(chairs))
  ))
);

export const fetchChair = id => dispatch => (
  APIUtil.fetchChair(id).then(chair => (
    dispatch(receiveChair(chair))
  ))
);
