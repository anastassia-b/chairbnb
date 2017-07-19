import React from 'react';
import { withRouter } from 'react-router';

class ChairForm extends React.Component{
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      description: '',
      picture: '',
      seating: 2
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
}
