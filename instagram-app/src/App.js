import React from 'react';

// components
import withAuthenticate from './components/authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage);

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
