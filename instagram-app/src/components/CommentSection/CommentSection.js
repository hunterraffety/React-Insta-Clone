// react
import React from 'react';

// styles
import './CommentSection.scss';
const CommentSection = props => {
  console.log(props);
  return (
    <div className='comment-section-container'>
      <div className='comment-text-container'>
        <span class='comment-section-username'>
          @{props.commentsInState.username}
        </span>
        <h1>{props.commentsInState.text}</h1>
      </div>
    </div>
  );
};

export default CommentSection;
