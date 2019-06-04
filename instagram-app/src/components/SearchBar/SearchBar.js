// react
import React from 'react';
// import { Navbar, Nav } from 'reactstrap';
import PropTypes from 'prop-types';

// styles
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className='search-bar-container'>
      <nav className='nav'>
        <div className='logo-container'>
          <div className='search-bar-icon'>
            <i class='fab fa-instagram' />
          </div>
          <div className='logo-img-container'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
              alt='instagram'
              className='logo-img'
            />
          </div>
        </div>
        <div className='search-input-container'>
          <input type='text' className='search-input' placeholder='Search' />
        </div>
        <div className='search-actions-container'>
          <i class='far fa-compass' />
          <i class='far fa-heart' />
          <i class='far fa-user' />
        </div>
      </nav>
      {/* <Navbar className='Navbar'>
          <Nav className='Nav'>
            <div className='logo-container'>
              <div className='icon'>
                <i class='fab fa-instagram' />
              </div>
              <div className='imgimg'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                  alt='instagram'
                  className='logo'
                />
              </div>
            </div>
            <div className='search-bar-input'>
              <h1>
                <input type='text' placeholder='Search' />
              </h1>
            </div>
            <div className='search-bar-icons'>
              <h1>Ok2</h1>
            </div>
          </Nav>
        </Navbar> */}
    </div>
  );
};

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
