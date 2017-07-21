import * as APIUtil from '../util/chair_api_util';

export const RECEIVE_CHAIR = 'RECEIVE_CHAIR';
export const RECEIVE_CHAIRS = 'RECEIVE_CHAIRS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveChairs = chairs => ({
  type: RECEIVE_CHAIRS,
  chairs
});

export const receiveChair = chair => ({
  type: RECEIVE_CHAIR,
  chair
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

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

export const createChair = chair => dispatch => (
  APIUtil.createChair(chair).then(chair => (
    dispatch(receiveChair(chair))
  ))
);
