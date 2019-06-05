import React from 'react';

// components
import AuthComponent from './components/authentication/withAuthenticate';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  render() {
    return <AuthComponent />;
  }
}

export default App;
