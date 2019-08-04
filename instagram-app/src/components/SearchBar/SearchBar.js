// react
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
// import './SearchBar.scss';

// styled components
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8ad8ff;
  justify-content: center;
  border-bottom: 1px solid #d1dce8;
`;

const LogoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    padding-bottom: 1rem;
    width: 55%;
    justify-content: space-evenly;
    align-items: center;
    .logo-container,
    .search-input-container,
    .search-actions-container {
      text-align: center;
      width: 30%;
    }
    .logo-container {
      display: flex;
      align-items: center;
    }
    .logo-img-container {
      padding: 0.5rem;
      width: 25%;
      border-left: 1px solid gray;
    }
    .search-bar-icon {
      padding: 0.5rem;
    }
    input {
      text-align: center;
      padding: 0.3rem;
      border-radius: 3px;
      border: 1px solid #f3f3f3;
    }
  }
  .logo-img {
    height: auto;
    align-items: center;
    width: 100%;
  }
  i {
    font-size: 3.2rem;
  }
  .search-actions-container {
    i {
      padding: 1rem;
    }
  }
`;

class SearchBar extends React.Component {
  render() {
    return (
      <Header>
        <LogoHeader>
          <nav className='nav'>
            <div className='logo-container'>
              <div className='search-bar-icon'>
                <i className='fab fa-instagram' />
              </div>
              <div className='logo-img-container'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                  alt='instagram'
                  className='logo-img'
                />
              </div>
            </div>

            <div className='search-actions-container'>
              <i className='far fa-compass' />
              <i className='far fa-heart' />
              <i className='far fa-user' />
            </div>
          </nav>
        </LogoHeader>
      </Header>
    );
  }
}

export default SearchBar;

// Navbar.propTypes = {
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
//   fixed: PropTypes.string,
//   color: PropTypes.string,
//   role: PropTypes.string,
//   expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// };

SearchBar.propTypes = {
  searchData: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  })
};
