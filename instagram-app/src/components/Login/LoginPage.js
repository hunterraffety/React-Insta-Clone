import React from 'react';
import Login from './Login';

// styles
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      default: []
    };
  }
  
  return (
    <div className='login-container'>
      <div className='form-container'>
        <form action='#' className='login-form' onSubmit={}>
          <label htmlFor='Username'>Username</label>
          <input type='text' />
          <label htmlFor='Username'>Password</label>
          <input type='password' />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
