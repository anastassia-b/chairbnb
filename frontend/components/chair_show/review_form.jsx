import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToChairShow = this.navigateToChairShow.bind(this);
  }

  navigateToChairShow() {
    const url = `/chairs/${this.props.match.params.chairId}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const chairId = parseInt(this.props.match.params.chairId);
    const review = Object.assign({}, this.state, {
      chair_id: chairId
    });
    this.props.createReview({review});
    this.navigateToChairShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />

          <label>Comment</label>
          <br/>
          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
        <br/>
        <input type="submit" />
        </form>
        <button onClick={this.navigateToChairShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
