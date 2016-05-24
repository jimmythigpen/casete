import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Login } from '../../ui/login.jsx';
import { App } from '../../ui/app.jsx';
import { Index } from '../../ui/index.jsx';
import { Profile } from '../../ui/profile.jsx';
import { NotFound } from '../../ui/notfound.jsx';

Meteor.startup( () => {
  render( 
    <Router history={ browserHistory }>
      <Route path="/login" component={ Login }>
    </Route>
    <Route path="/" component={ App }>
      <IndexRoute component={ Index }/>
       <Route path="/profile" component={ Profile } />
      <Route path="*" component={ NotFound } />
    </Route>
    </Router>,
    document.getElementById( 'react-root' ) 
  );
});
