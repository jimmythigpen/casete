import React from 'react';
import { browserHistory } from 'react-router';
import { methods } from '../api/users/methods.js'


export class Login extends React.Component {
  handleClick() {
    Meteor.loginWithFacebook({}, (err) => {
      console.log('logging in with FB');
      if (err) {
        console.log('Error logging in with Facebook: ', err);
        return false;
      }

      if (Meteor.user().profile.hasSetProfile) {
        browserHistory.replace('/')
      } else {
        Meteor.call('users.updateFromFacebook', (err) => {
          if (err) {
            console.log('Error updating user from Google: ', err);
            return false;
          }

          browserHistory.replace('/')
        });
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

