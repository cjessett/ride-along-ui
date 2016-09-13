import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

const styles = {
  info: {
    margin: 50
  }
}

class TripRequest extends Component {
  handleAcceptClick = () => {
    this.props.onResponse(this.props.id, "accept");
  }
  handleDenyClick = () => {
    this.props.onResponse(this.props.id, "deny");
  }
  render() {
    return(
      <span>
        <span style={styles.info}>{this.props.name}</span>
        <span style={styles.info}>{this.props.email}</span>
        <span style={styles.info}>
          <RaisedButton
          label="Accept"
          primary={true}
          onClick={this.handleAcceptClick}
        />
        </span>
        <span style={styles.info}>
          <RaisedButton
            label="Deny"
            secondary={true}
            onClick={this.handleDenyClick}
          />
        </span>
      </span>
    )
  }
}

export default TripRequest;

