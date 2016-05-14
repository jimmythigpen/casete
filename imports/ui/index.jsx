import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export class Index extends React.Component {
    render() {
      return (
        <div className="container">
          <header>
            <h1>Facebook Login</h1>

            <AccountsUIWrapper />

          </header>
        </div>
      );
    }
}