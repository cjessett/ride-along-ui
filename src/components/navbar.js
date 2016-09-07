import React from 'react';
import AppBar from 'material-ui/AppBar';
import Links from './nav_links';

const Navbar = () => (
  <AppBar
    title="Ride Along"
    iconElementRight={<Links />}
  />
);

export default Navbar;
