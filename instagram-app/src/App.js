import React from 'react';

// components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// data
import dummyData from './dummy-data';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import PostsPage from './components/PostContainer/PostsPage';

class App extends React.Component {
  state = {
    dummyData: []
  };

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchFilter = e => {};

  render() {
    return (
      <div className='App'>
        <SearchBar
          changeHandler={this.changeHandler}
          newSearch={this.state.search}
        />
        <PostsPage posts={this.state.dummyData} />
      </div>
    );
  }
}
export default App;
