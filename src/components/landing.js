import React from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

const Landing = () => (
  <Grid>
    <Row className="show-grid">
      <Col xsHidden md={12}>
        <Jumbotron className="center">
          <h1>Welcome to Ride Along</h1>
          <p>Connect with someone near you to carpool!</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default Landing;
