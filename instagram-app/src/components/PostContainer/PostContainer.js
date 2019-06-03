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
          />
          <p className='post-username'>{this.props.postsInState.username}</p>
        </div>
        <div className='post-image'>
          <img src={this.props.postsInState.imageUrl} alt='this is my image' />
        </div>
        {this.state.commentData.map(commentsOnPost => (
          <CommentSection commentsInState={commentsOnPost} />
        ))}
      </div>
    );
  }
}

export default PostContainer;
