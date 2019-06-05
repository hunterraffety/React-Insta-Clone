import React from 'react';

// components
import AuthComponent from './components/authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  render() {
    return <AuthComponent />;
  }
}

export default App;
