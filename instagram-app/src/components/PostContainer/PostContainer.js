// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import CommentSection from '../CommentSection/CommentSection';

// styles
import './PostContainer.scss';

const PostContainer = props => {
  console.log(`props coming from PostContainer:`, props);
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
        <i className='far fa-heart' />
        <i className='far fa-comment' />
      </div>
      <div className='likes-container'>{props.postsInState.likes} likes</div>
      <CommentSection comments={props.postsInState.comments} />
      {/* {props.postsInState.comments.map(commentsOnPost => (
        <CommentSection
          commentsInState={commentsOnPost}
          key={commentsOnPost.id}
        />
      ))} */}
    </div>
  );
};

export default PostContainer;
