// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import CommentSection from '../CommentSection/CommentSection';
import Likes from '../Likes/Likes';

// styles
import './PostContainer.scss';

class PostContainer extends React.Component {
  state = {
    data: this.props.postsInState,
    likes: this.props.postsInState.likes
  };

  addLike = () => {
    let likes = this.state.likes + 1;
    this.setState({
      likes
    });
  };

  render() {
    return (
      <div className='post-container-container'>
        <div className='container-header'>
          <img
            src={this.state.data.thumbnailUrl}
            className='post-thumbnail'
            alt='profile pic'
          />
          <p className='post-username'>{this.state.data.username}</p>
        </div>
        <div className='post-image'>
          <img src={this.state.data.imageUrl} alt='main post' />
        </div>
        <div className='likes-container'>
          <Likes addLike={this.addLike} likes={this.state.likes} />
        </div>
        <CommentSection
          comments={this.props.postsInState.comments}
          id={this.props.postsInState.key}
        />
      </div>
    );
  }
}
export default PostContainer;

PostContainer.propTypes = {
  postsInState: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  })
};
