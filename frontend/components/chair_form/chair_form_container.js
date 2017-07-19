import { connect } from 'react-redux';
import { createChair } from '../..actions/chair_actions';
import ChairForm from './chair_form';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
  createChair: chair => dispatch(createChair(chair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairForm);
