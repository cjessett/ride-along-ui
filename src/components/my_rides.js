import React, { Component } from 'react';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class MyRides extends Component {
  render() {
    return (
      <div>
        <h2 style={styles.headline}>Your Rides</h2>
        <p>
          Tabs are also controllable if you want to programmatically pass them their values.
          This allows for more functionality in Tabs such as not
          having any Tab selected or assigning them different values.
        </p>
    </div>
    )
  }
}

export default MyRides;
