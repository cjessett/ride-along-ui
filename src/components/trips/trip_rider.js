import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
const styles = {
  prop: {
    margin: 50
  }
}

class TripRider extends Component {
  render() {
    return(
      <span>
        <span style={styles.prop}>{this.props.name}</span>
        <span style={styles.prop}>{this.props.email}</span>
        <span style={styles.prop}><RaisedButton label="Kick" secondary={true} /></span>
      </span>
    )
  }
}

export default TripRider;