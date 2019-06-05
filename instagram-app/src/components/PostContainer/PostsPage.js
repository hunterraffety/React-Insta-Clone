import React from 'react';
import PostContainer from './PostContainer';

const PostsPage = props => {
  return (
    <div className='posts-container'>
      {props.posts.map(postObjects => (
        <PostContainer postsInState={postObjects} key={postObjects.id} />
      ))}
    </div>
  );
};

export default PostsPage;
