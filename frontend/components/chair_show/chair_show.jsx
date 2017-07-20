import React from 'react';
import { Link } from 'react-router-dom';

import ChairDetail from './chair_detail';
import ChairMap from '../chair_map/chair_map';

import { ProtectedRoute } from '../../util/route_util';


const ChairShow = ({ chair, chairId, fetchChair }) => {
  const chairs = {
    [chairId]: chair
  };

  return(
    <div className="single-chair-show">
      <div className="single-chair-map">
        <Link to="/">Back to Chairs Index</Link>
        <ChairMap
          chaires={chairs}
          chairId={chairId}
          singleChair={true}
          fetchChair={fetchChair}
        />
      </div>
    </div>
  );
};

export default ChairShow;
