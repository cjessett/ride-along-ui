import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Links from './nav_links';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class Navbar extends Component {
  render() {
    return(
        <AppBar
          title="Ride Along"
          iconElementRight={<Links />}
          iconElementLeft={<IconButton href="/"><ActionHome /></IconButton>}
        />
    );
  }
}

export default Navbar;
