import React from 'react';
import PropTypes from 'prop-types';

import './Likes.scss';

const Likes = props => {
  return (
    <div className='post-reaction-container'>
      <i className='far fa-heart' onClick={props.addLike} id={props.id} />
      <i className='far fa-comment' onClick={props.addComment} id={props.id} />
      <div className='likes-display'>
        <h1>{props.likes} likes</h1>
      </div>
    </div>
  );
};

// work on logic to toggle icon

export default Likes;

Likes.propTypes = {
  addLike: PropTypes.func,
  addComment: PropTypes.string,
  id: PropTypes.string,
  likes: PropTypes.number
};
