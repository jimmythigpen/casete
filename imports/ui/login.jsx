import React from 'react';

export class Login extends React.Component {
  handleClick() {
    Meteor.loginWithFacebook({}, (err) => {
      console.log('logging in with FB');
      if (err) {
        console.log('Error logging in with Facebook: ', err);
        return false;
      }
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Facebook Login</h1>

        <a href="#" onClick={this.handleClick}>Sign in with Facebook</a>
      </div>
    );
  }
}

