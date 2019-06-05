import React from 'react';

// styles
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  submitLogin = e => {
    console.log(e);
    if (localStorage.getItem('username')) {
      localStorage.removeItem('username');
      this.setState({
        username: ''
      });
    } else {
      localStorage.setItem('username', 'hunter');
      this.setState({
        username: 'hunter'
      });
    }
  };

  render() {
    return (
      <div className='login-container'>
        <div className='form-container'>
          <form className='login-form' onSubmit={this.submitLogin}>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
            <button onSubmit={this.submitLogin}>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
