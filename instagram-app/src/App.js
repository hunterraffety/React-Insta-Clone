import React from 'react';

// components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// data
import dummyData from './dummy-data';

// styles
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className='App'>
        <SearchBar />
        {this.state.dummyData.map(postObjects => {
          return <PostContainer postsInState={postObjects} />;
        })}
      </div>
    );
  }
}
export default App;
