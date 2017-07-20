import { connect } from 'react-redux';

import { fetchChair } from '../../actions/chiar_actions';
import { selectChair } from '../../reducers/selectors';
import ChairShow from './chair_show';

const mapStateToProps = (state, { match }) => {
  const chairId = parseInt(match.params.chairId);
  const chair = selectChair(state, match.params.chairId);
  return {
    chairId,
    chair
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChair: id => dispatch(fetchChair(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChairShow);
