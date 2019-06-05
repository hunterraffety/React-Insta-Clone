import React from 'react';

// styles
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      default: []
    };
  }

  submitLogin = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className='login-container'>
        <div className='form-container'>
          <form className='login-form' onSubmit={this.submitLogin}>
            <label htmlFor='Username'>Username</label>
            <input type='text' name='username' />
            <label htmlFor='Username'>Password</label>
            <input type='password' name='password' />
            <button onSubmit={this.submitLogin}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
