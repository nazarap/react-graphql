import * as React from 'react';
import {
  Row
  , Col
  , Button
} from 'mdbreact';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      <Row>
        <Col lg="6" md="6" className="mb-lg-0 6">
          User list</Col>

        <Col lg="6" md="6" className="mb-lg-0 6">
          <Button className="without-shadow"
                  color="info">
            Filter</Button>

          <Link to="/create">
            <Button className="without-shadow">
              Create user</Button>
          </Link>
        </Col>
      </Row>
    </h2>
  );
}