import React from 'react';
import ChairIndexItem from './chair_index_item';

const ChairIndex = ({ chairs }) => (
  <div>
    <h2>Chairs: </h2>
    {chairs.map (chair => (
      <ChairIndexItem
        chair={chair}
        key={chair.id}
      />
    ))}
  </div>
);

export default ChairIndex;
