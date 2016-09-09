import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import helpers from '../utils/helpers';

class GetTrips extends Component {

  handleClick(event) {
    event.preventDefault();

    var data = helpers.getTrips();
    data.then(function(promise) {
      var trips = helpers.parsePromise(promise)
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

export default GetTrips;
