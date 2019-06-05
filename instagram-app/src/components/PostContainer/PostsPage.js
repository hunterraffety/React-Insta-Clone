import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  state = {
    dummyData: [],
    search: ''
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchFilter = e => {};

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }
  render() {
    return (
      <div className='App'>
        <SearchBar
          changeHandler={this.changeHandler}
          newSearch={this.state.search}
        />
        <div className='posts-container'>
          {this.state.dummyData.map(postObjects => (
            <PostContainer postsInState={postObjects} key={postObjects.id} />
          ))}
        </div>{' '}
      </div>
    );
  }
}

export default PostsPage;
