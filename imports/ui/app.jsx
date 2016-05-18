import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


export class App extends React.Component {
  componentWillMount() {
    if (!Meteor.userId()) {
      browserHistory.replace('/login');
    }
  };
  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    )
  }
}