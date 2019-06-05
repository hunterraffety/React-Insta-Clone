import React from 'react';

// components
import withAuthenticate from './components/authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
