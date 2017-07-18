import React from 'react';
import { withRouter } from 'react-router-dom';


class ChairIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const chairId = this.props.chair.id;
    this.props.history.push(`/chairs/${chairId}`);
  }

  render() {
    const { description } = this.props.chair;
    return (
      <div className="chair-index-item" onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(ChairIndexItem);
