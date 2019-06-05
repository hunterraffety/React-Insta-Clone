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
    dummyData: []
  };

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  render() {
    return (
      <div className='App'>
        <SearchBar posts={this.dummyData} />
        {this.state.dummyData.map(postObjects => (
          <PostContainer postsInState={postObjects} key={postObjects.id} />
        ))}
      </div>
    );
  }
}
export default App;
