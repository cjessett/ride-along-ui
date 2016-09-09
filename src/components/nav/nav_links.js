import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Links extends Component {
  render() {
    return (
      <div>
        <FlatButton label="Profile" href='/profile'/>
        <FlatButton label="Logout" /> 
      </div>
    );
  }
}

export default Links;

