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
        <h1>{this.state.comments.text}</h1>
      </div>
    );
  }
}

export default CommentSection;
