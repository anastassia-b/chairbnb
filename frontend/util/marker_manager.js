/* global google:false */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(chairs) {
    const chairsObj = {};
    chairs.forEach(chair => chairsObj[chair.id] = chair);

    chairs
      .filter(chair => !this.markers[chair.id])
      .forEach(newChair => this.createMarkerFromChair(newChair, this.handleClick))

    Object.keys(this.markers)
      .filter(chairId => !chairsObj[chairId])
      .forEach((chairId) => this.removeMarker(this.markers[chairId]))
  }

  createMarkerFromChair(chair) {
    const position = new google.maps.LatLng(chair.lat, chair.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      chairId: chair.id
    });

    marker.addListener('click', () => this.handleClick(chair));
    this.markers[marker.chairId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.chairId].setMap(null);
    delete this.markers[marker.chairId];
  }
}

export default MarkerManager;
