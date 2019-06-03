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
        <img src={this.props.postsInState.thumbnailUrl} />
        <h1>{this.props.postsInState.username}</h1>
        <img src={this.props.postsInState.imageUrl} />
        {this.state.commentData.map(commentsOnPost => (
          <CommentSection commentsInState={commentsOnPost} />
        ))}
      </div>
    );
  }
}

export default PostContainer;
