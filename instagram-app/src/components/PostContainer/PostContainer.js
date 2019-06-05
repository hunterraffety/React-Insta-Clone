// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import CommentSection from '../CommentSection/CommentSection';

// styles
import './PostContainer.scss';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsInState: props.postsInState,
      likes: ''
    };
  }

  addLike = e => {
    e.preventDefault();
    const newLike = {
      likes: this.props.postsInState.likes + 1,
      id: this.props.postsInState.key
    };
    this.setState(() => {
      return {
        postsInState: [newLike]
      };
    });
  };

  // addLike = e => {
  //   console.log(`addLike`, e, e.target.value, e.target.name);
  //   this.setState({
  //     likes: [...+ 1
  //   });
  // };

  addComment = e => {
    console.log(`addComment`, e);
  };

  render() {
    console.log(`PostContainer: this.props inside render()`, this.props);
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
          <i
            className='far fa-heart'
            onClick={this.addLike}
            id={this.props.postsInState.id}
          />
          <i className='far fa-comment' onClick={this.addComment} />
        </div>
        <div className='likes-container'>
          {this.props.postsInState.likes} likes
        </div>
        <CommentSection
          comments={this.props.postsInState.comments}
          id={this.props.postsInState.id}
        />
        {/* {props.postsInState.comments.map(commentsOnPost => (
        <CommentSection
          commentsInState={commentsOnPost}
          key={commentsOnPost.id}
        />
      ))} */}
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
