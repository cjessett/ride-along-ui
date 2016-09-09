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
        <h2 style={styles.headline}>{this.props.name}</h2>
        <p> hey</p>
      </div>
    )
  }
}

export default MyRides;
