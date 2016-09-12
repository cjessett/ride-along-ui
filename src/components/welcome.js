import React, {Component} from 'react'
import Landing from './landing'
import {Grid} from 'react-bootstrap';


class Welcome extends Component {
  render() {
    return (
      <div>
        <Grid>
          {Landing()}
        </Grid>
      </div>  
    )
  }
}

export default Welcome;