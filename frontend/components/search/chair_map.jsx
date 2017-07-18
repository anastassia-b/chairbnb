import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


class ChairMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.773972, lng: -122.431297 },
      zoom: 12
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    if (this.props.singleChair) {
      this.props.fetchChair(this.props.chairId);
    }
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
