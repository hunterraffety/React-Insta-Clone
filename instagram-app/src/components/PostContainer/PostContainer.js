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
    likes: this.props.postsInState.likes
  };

  addLike = () => {
    let likes = this.state.likes + 1;
    this.setState({
      likes
    });
  };

  // addLike = e => {
  //   console.log(`addLike`, e, e.target.value, e.target.name);
  //   this.setState({
  //     likes: [...+ 1
  //   });
  // };

  // addLike = e => {
  //   console.log(`addLike`, e, this.state.likes);
  // };

  // addComment = e => {
  //   e.preventDefault();
  //   console.log(`addComment`, e);
  // };

  render() {
    return (
      <div className='post-container-container'>
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <div className='test'>
                  <div className='container-header'>
                    <img
                      src={post.thumbnailUrl}
                      className='post-thumbnail'
                      alt='profile pic'
                    />
                    <p className='post-username'>{post.username}</p>
                  </div>
                  <div className='post-image'>
                    <img src={post.imageUrl} alt='main post' />
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
            })
          : this.props.filteredPosts.map(post => {
              return (
                <div className='test'>
                  <div className='container-header'>
                    <img
                      src={post.thumbnailUrl}
                      className='post-thumbnail'
                      alt='profile pic'
                    />
                    <p className='post-username'>{post.username}</p>
                  </div>
                  <div className='post-image'>
                    <img src={post.imageUrl} alt='main post' />
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
            })}
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
