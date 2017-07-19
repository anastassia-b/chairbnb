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
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
  this.props.history.push('/');
}

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error)
        console.log(error);
      else
        this.setState({ picture: results[0].secure_url });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const chair = Object.assign({}, this.state, this.coords);
    this.props.createChair({chair});
    this.navigateToSearch();
  }

  render() {
    const { description, picture, seating } = this.state;
    const { lat, lng } = this.coords;

    return (
      <div className="new-chair-container">
        <div className="new-chair-form">
          <h3 className="new-chair-title">Create A Chair!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="chair-field">Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
              className="chair-field"
            />

          <label className="chair-field">Number of Seats</label>
            <input
              min="0"
              type="number"
              value={seating}
              onChange={this.update('seating')}
              className="chair-field"
            />

          <label className="chair-field">Latitude</label>
            <input
              type="text"
              disabled
              value={lat}
              className="chair-field"
            />

          <label className="chair-field">Longitude</label>
            <input
              type="text"
              disabled
              value={lng}
              className="chair-field"
            />

            <div className="button-holder">
              <button
                onClick={this.handleCloudinary}
                className="new-chair-button"
              >
                Add image
              </button>
            </div>

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Chair"
                className="new-chair-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-chair-button"
              onClick={this.navigateToSearch}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
