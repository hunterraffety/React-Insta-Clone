import React from 'react';
import PropTypes from 'prop-types';

import './Likes.scss';

class Likes extends React.Component {
  state = {
    likes: this.props.likes
  };

  addLike = () => {
    let likes = this.state.likes + 1;
    this.setState({
      likes
    });
  };

  render() {
    return (
      <div className='post-reaction-container'>
        <i className='far fa-heart' onClick={this.addLike} />
        <i className='far fa-comment' onClick={this.addComment} />
        <div className='likes-display'>
          <h1>{this.state.likes} likes</h1>
        </div>
      </div>
    );
  }
}
// work on logic to toggle icon

export default Likes;

Likes.propTypes = {
  addLike: PropTypes.func,
  addComment: PropTypes.string,
  id: PropTypes.string,
  likes: PropTypes.number
};
