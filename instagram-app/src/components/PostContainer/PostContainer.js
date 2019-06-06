// react
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import CommentSection from '../CommentSection/CommentSection';
import Likes from '../Likes/Likes';

// styles
import './PostContainer.scss';

// styled components
import Username from '../../Styles/Reusables/Username';

class PostContainer extends React.Component {
  render() {
    return (
      <div className='post-container-container'>
        {this.props.filteredPosts.length === 0
          ? this.props.postsInState.map(post => {
              return (
                <div className='test'>
                  <div className='container-header'>
                    <img
                      src={post.thumbnailUrl}
                      className='post-thumbnail'
                      alt='profile pic'
                    />
                    <Username bolder>{post.username}</Username>
                  </div>
                  <div className='post-image'>
                    <img src={post.imageUrl} alt='main post' />
                  </div>
                  <div className='likes-container'>
                    <Likes
                      addLike={this.addLike}
                      likes={post.likes}
                      id={post.id}
                    />
                  </div>
                  <CommentSection comments={post.comments} id={post.key} />
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
                    <Likes addLike={this.addLike} likes={post.likes} />
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
