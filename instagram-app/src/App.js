import React from 'react';

// components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// data
import dummyData from './dummy-data';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  state = {
    dummyData: dummyData
  };

  render() {
    return (
      <div className='App'>
        <SearchBar />
        {this.state.dummyData.map(postObjects => (
          <PostContainer postsInState={postObjects} />
        ))}
      </div>
    );
  }
}
export default App;
