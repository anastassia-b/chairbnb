import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  chairs: asArray(state)
});

export default connect(
  mapStateToProps
)(Search);
