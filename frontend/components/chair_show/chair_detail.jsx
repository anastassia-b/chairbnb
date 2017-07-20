import React from 'react';
import { Link } from 'react-router';

const ChairDetail = ({ chair }) => {
  return (
    <div>
      <ul className="chair-list">
        <img className="index-image" src={chair.picture} />
        <li>Description: {chair.description}</li>
        <li>Seats: {chair.seating}</li>
        <li>Latitude: {chair.lat}</li>
        <li>Longitude: {chair.lng}</li>
      </ul>
    </div>
  );
};

export default ChairDetail;
