// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './CommentSection.scss';
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      id: Date.now(),
      text: ''
    };
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.text,
      id: e.target.id,
      username: 'hunter'
    };
    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        text: ''
      };
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className='comment-section-container'>
        {this.state.comments.map(commentsOnPost => (
          <div className='comment-container' key={Math.random()}>
            <span className='comment-username'>@{commentsOnPost.username}</span>
            <span className='comment-text'>{commentsOnPost.text}</span>
          </div>
        ))}
        <div className='form'>
          <form onSubmit={this.addNewComment}>
            <input
              placeholder='add a comment'
              name='text'
              onChange={this.handleChanges}
              value={this.state.text}
              id={this.state.id}
            />
            <button>add comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;

// {
//   /* {props.postsInState.comments.map(commentsOnPost => (
//         <CommentSection
//           commentsInState={commentsOnPost}
//           key={commentsOnPost.id}
//         />
//       ))} */
// }

CommentSection.propTypes = {
  commentData: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};
