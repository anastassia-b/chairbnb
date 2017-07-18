import React from 'react';

import ChairIndex from './chair_index';
import ChairMap from './chair_map';

const Search = ({ chairs }) => (
  <div className="user-pane">
    <div className="left-half">
      Map goes here
    </div>
    <div className="right-half">
      Filter form goes here
      <ChairIndex chairs={chairs} />
    </div>
  </div>
);

export default Search;
