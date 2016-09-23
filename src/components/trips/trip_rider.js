import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

const styles = {
  info: {
    margin: 50
  }
}

class TripRider extends Component {
  handleClick = () => {
    this.props.onRemove(this.props.tripId, this.props.id);
  }
  render() {
    return(
      <span>
        <span style={styles.info}>{this.props.name}</span>
        <span style={styles.info}>{this.props.email}</span>
        <span style={styles.info}>
          <RaisedButton
            label="Remove"
            secondary={true}
            onClick={this.handleClick}
          />
        </span>
      </span>
    )
  }
}

export default TripRider;
