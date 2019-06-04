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
    console.log(e, i);
  };

  render() {
    console.log(`this.props in render()`, this.props);
    return (
      <div className='comment-section-container'>
        {this.state.commentData.map(commentsOnPost => (
          <div>
            <h1>@{commentsOnPost.username}</h1>
            <h1>{commentsOnPost.text}</h1>
          </div>
        ))}
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
