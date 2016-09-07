import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import getRepos from '../utils/helpers';

class GetStuff extends Component {

  handleClick(event) {
    event.preventDefault();

    var data = getRepos('cjessett');
    data.then(function(data) {
      debugger;
    })
  };

  render() {
    return (
      <div onClick={this.handleClick}>
      <FlatButton label='get' />
      </div>
    );
  }
};

export default GetStuff;
