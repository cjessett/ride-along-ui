import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory} from 'react-router';
import Dashboard from './components/dashboard';
import Welcome from './components/welcome';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Welcome} />
    <Route path="/profile" component={Dashboard} />
  </Router>,
  document.getElementById('content')
  )

