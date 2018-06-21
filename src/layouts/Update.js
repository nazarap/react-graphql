import * as React from 'react';
import UpdateUser from "../components/update-user/UpdateUser";
import { Container, Row, Col } from 'mdbreact';

export default ({ match }) => {
  return(
    <Container>
      <Row>
        <Col className="col-center" md="6">
          <UpdateUser/>
        </Col>
      </Row>
    </Container>
  );
};
