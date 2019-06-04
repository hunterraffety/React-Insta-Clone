// react
import React from 'react';

// components
import CommentSection from '../CommentSection/CommentSection';

// styles
import './PostContainer.scss';

const PostContainer = props => {
  return (
    <div className='post-container-container'>
      <div className='container-header'>
        <img
          src={props.postsInState.thumbnailUrl}
          className='post-thumbnail'
          alt='profile pic'
        />
        <p className='post-username'>{props.postsInState.username}</p>
      </div>
      <div className='post-image'>
        <img src={props.postsInState.imageUrl} alt='main post' />
      </div>
      <div className='post-reaction-container'>
        <i class='far fa-heart' />
        <i class='far fa-comment' />
      </div>
      <div className='likes-container'> likes</div>
      {props.postsInState.comments.map(commentsOnPost => (
        <CommentSection commentsInState={commentsOnPost} />
      ))}
      <div class='post-timestamp'>2 hours ago</div>
      <input
        type='text'
        className='post-add-comment'
        placeholder='Add a Comment...'
      />
    </div>
  );
};

export default PostContainer;
