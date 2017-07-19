import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 37.773972, lng: -122.431297 },
  zoom: 12
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class ChairMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.singleChair) {
      this.props.fetchChair(this.props.chairId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.chairs);
    }
  }

  componentDidUpdate() {
    if (this.props.singleChair) {
      const targetChairKey = Object.keys(this.props.benches)[0];
      const targetChair = this.props.benches[targetChairKey];
      this.MarkerManager.updateMarkers([targetChair]);
    } else {
      this.MarkerManager.updateMarkers(this.props.chairs);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleClick(coords) {
   this.props.history.push({
     pathname: "benches/new",
     search: `lat=${coords.lat}&lng=${coords.lng}`
   });
 }

  handleMarkerClick(chair) {
    this.props.history.push(`chairs/${chair.id}`);
  }

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }

}

export default withRouter(ChairMap);
