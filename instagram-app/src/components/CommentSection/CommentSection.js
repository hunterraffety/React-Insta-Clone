// react
import React from 'react';

// styles
import './CommentSection.scss';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        comments: props.commentsInState
      };
    }
  }

  render() {
    return (
      <div className='comment-section-container'>
        <div className='comment-text-container'>
          <span class='comment-section-username'>
            @{this.state.comments.username}
          </span>
          <h1>{this.state.comments.text}</h1>
        </div>
      </div>
    );
  }
}

export default CommentSection;
