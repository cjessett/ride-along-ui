import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import {MuiThemeProvider,RaisedButton} from 'material-ui'
import '../index.css';
const Landing = () => (
  <MuiThemeProvider>
    <Row className="show-grid">
      <Col xsHidden md={12}>
        <Jumbotron className="center">
          <h1>Welcome to Ride Along</h1>
          <p>Connect with someone near you to carpool!</p>
        </Jumbotron>
      </Col>
    </Row>
  </MuiThemeProvider>  
);

export default Landing;
