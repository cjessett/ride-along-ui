import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

const styles = {
  info: {
    margin: 50
  }
}

class TripRider extends Component {
  render() {
    return(
      <span>
        <span style={styles.info}>{this.props.name}</span>
        <span style={styles.info}>{this.props.email}</span>
        <span style={styles.info}><RaisedButton label="Kick" secondary={true} /></span>
      </span>
    )
  }
}

export default TripRider;
