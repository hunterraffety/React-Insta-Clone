// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './CommentSection.scss';
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.commentsOnPost
    };
  }

  addNewComment = (e, i) => {
    console.log(e, i);
  };

  render() {
    return (
      <div className='comment-section-container'>
        <div className='comment-text-container'>
          <span className='comment-section-username'>
            @{this.props.commentsInState.username}
          </span>
          <h1>{this.props.commentsInState.text}</h1>
        </div>
      </div>
    );
  }
}

export default CommentSection;
