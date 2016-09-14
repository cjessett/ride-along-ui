import React, {Component} from 'react'
import Landing from './landing'
import {Grid} from 'react-bootstrap';
import Form from './formsy'

const styles = {
  background: {
    backgroundColor: "#00BCD4",
    paddingTop: 50,
    paddingBottom: 50
  }
}

class Welcome extends Component {
  render() {
    return (
      <div >
        <Grid>
          {Landing()}
          <div style={styles.background}>
            <Form />
          </div>
        </Grid>
      </div>
    )
  }
}

export default Welcome;
