// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './CommentSection.scss';
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentData: this.props.comments
    };
    console.log(`commentsection`, this.state.commentData);
  }

  addNewComment = (e, i) => {
    e.preventDefault();
    console.log(e, i);
  };

  render() {
    console.log(`this.props in render()`, this.props);
    return (
      <div className='comment-section-container'>
        {this.state.commentData.map(commentsOnPost => (
          <div className='comment-container'>
            <span className='comment-username'>@{commentsOnPost.username}</span>
            <span class='comment-text'>{commentsOnPost.text}</span>
          </div>
        ))}
        <div className='form'>
          <form onSubmit={this.addNewComment}>
            <input type='text' placeholder='add a comment' />
            <a href='#' onClick={this.addNewComment}>
              Add
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;

{
  /* {props.postsInState.comments.map(commentsOnPost => (
        <CommentSection
          commentsInState={commentsOnPost}
          key={commentsOnPost.id}
        />
      ))} */
}
