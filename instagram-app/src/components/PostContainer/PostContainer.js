// react
import React from 'react';

// components
import CommentSection from '../CommentSection/CommentSection';

// styles
import './PostContainer.scss';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        commentData: props.postsInState.comments
      };
    }
  }
  render() {
    return (
      <div className='post-container-container'>
        <div className='container-header'>
          <img
            src={this.props.postsInState.thumbnailUrl}
            className='post-thumbnail'
            alt='profile pic'
          />
          <p className='post-username'>{this.props.postsInState.username}</p>
        </div>
        <div className='post-image'>
          <img src={this.props.postsInState.imageUrl} alt='main post' />
        </div>
        <div className='post-reaction-container'>
          <i class='far fa-heart' />
          <i class='far fa-comment' />
        </div>
        <div className='likes-container'>
          {this.props.postsInState.likes} likes
        </div>
        {this.state.commentData.map(commentsOnPost => (
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
  }
}

export default PostContainer;
