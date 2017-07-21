import React from 'react';
import { Link } from 'react-router-dom';

import ChairDetail from './chair_detail';
import ChairMap from '../search/chair_map';
import { ProtectedRoute } from '../../util/route_util';

import ReviewFormContainer from './review_form_container';
import { ReviewLink } from '../../util/link_util';

const ChairShow = ({ chair, chairId, fetchChair }) => {
  const chairs = {
    [chairId]: chair
  };

  return(
    <div className="single-chair-show">
      <Link to="/">Back to Chairs Index</Link>
      <div className="single-chair-map">
        <ChairMap
          chairs={chairs}
          chairId={chairId}
          singleChair={true}
          fetchChair={fetchChair}
        />
      </div>
      <div className="right-half chair-details">
        <ChairDetail chair={chair} />
        <ReviewLink
          component={ReviewFormContainer}
          to={`/chairs/${chairId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute
          path="/chairs/:chairId/review"
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};

export default ChairShow;
