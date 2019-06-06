import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  state = {
    dummyData: [],
    search: '',
    filteredPosts: []
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  searchFilter = e => {
    const filtered = this.state.dummyData.filter(post =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar
          changeHandler={this.changeHandler}
          newSearch={this.state.search}
          searchFilter={this.searchFilter}
        />
        <div className='posts-container'>
          <PostContainer
            postsInState={this.state.dummyData}
            data={this.state.dummyData}
            searchFilter={this.searchFilter}
            filteredPosts={this.state.filteredPosts}
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;
