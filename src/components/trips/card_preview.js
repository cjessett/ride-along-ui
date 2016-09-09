import React, { Component } from 'react';

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

class TripCardPreview extends Component {
  render() {
    return (
      <span style={styles.container}>
        <span style={styles.departure}>Departing: {this.props.departure}</span>
        <span style={styles.arrival}>Arriving: {this.props.arrival}</span>
      </span>
    )
  }
}

export default TripCardPreview;
