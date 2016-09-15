import React, { Component } from 'react';
import helpers from '../../utils/time_helpers'

const styles = {
  container: {
    fontSize: 24
  },
  departure: {
    marginRight: 25
  },
  arrival: {
    marginLeft: 25
  }
}

class RideData extends Component {
  handleTime = (time) => {
    return helpers.formatTime(time);
  }
  render() {
    return (
      <span style={styles.container}>
        <span style={styles.departure}>Departing: {this.handleTime(this.props.departure)}</span>
        <span style={styles.arrival}>Arriving: {this.handleTime(this.props.arrival)}</span>
      </span>
    )
  }
}

export default RideData;
