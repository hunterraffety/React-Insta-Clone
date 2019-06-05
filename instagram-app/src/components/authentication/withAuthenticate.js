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

    componentDidUpdate() {
      this.setState(() => {
        if (localStorage.getItem('username')) {
          this.setState({
            isLoggedIn: true
          });
        } else {
          this.setState({
            isLoggedIn: false
          });
        }
      });
    }

    render() {
      if (localStorage.getItem('username')) {
        return <PostsPage />;
      } else {
        return <LoginPage />;
      }
    }
  };

export default withAuthenticate(PostsPage)(LoginPage);
