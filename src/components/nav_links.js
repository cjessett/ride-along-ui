import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Links = () => (
  <div>
    <FlatButton label="Profile" href="http://localhost:3000/profile" />
    <FlatButton label="Logout" />
  </div>
);

export default Links;

