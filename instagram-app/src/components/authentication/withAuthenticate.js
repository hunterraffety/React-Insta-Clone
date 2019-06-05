import React from 'react';

import PostsPage from '../PostContainer/PostsPage';
import LoginPage from '../Login/LoginPage';

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false
      };
    }
    render() {
      return <PostsPage />;
    }
  };

export default withAuthenticate(PostsPage)(LoginPage);
