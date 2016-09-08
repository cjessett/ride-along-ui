import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Links from './nav_links';

class Navbar extends Component {
  render() {
    return(
      <a href='/'>
        <AppBar
          title="Ride Along"
          iconElementRight={<Links />}
        />
      </a>  
    );
  }
}

export default Navbar;
