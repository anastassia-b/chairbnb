import React from 'react';

import ChairIndex from './chair_index';
import ChairMap from './chair_map';

const Search = ({ chairs }) => (
  <div className="user-pane">
    <div className="left-half">
      <h3>Click Map to Add a Chair!</h3>
      <ChairMap chairs={chairs} />
    </div>
    <div className="right-half">
      Filter form goes here
      <ChairIndex chairs={chairs} singleChair={false} />
    </div>
  </div>
);

export default Search;
