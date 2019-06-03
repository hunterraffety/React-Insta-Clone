// react
import React from 'react';
import { Navbar, Nav } from 'reactstrap';
import PropTypes from 'prop-types';

// styles
import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();
    {
      this.state = {
        isOpen: true
      };
    }
  }

  render() {
    return (
      <div className='search-bar-container'>
        <Navbar className='Navbar'>
          <Nav className='Nav'>
            <div className='logo'>
              <img src='#' alt='' />
              <i class='fab fa-instagram' />
              Insta-Clone
            </div>
            <h1>
              <input type='text' placeholder='Search' />
            </h1>
            <h1>Ok2</h1>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};
