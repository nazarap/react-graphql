import * as React from 'react';
import UpdateUser from "../components/update-user/UpdateUser";
import {
  Container
  , Row
  , Col
} from 'mdbreact';
import { graphql } from 'react-relay'
import { Query } from "../query";

const UpdateViewerQuery = graphql`
  query UpdateViewerQuery {
    viewer {
      ...UpdateUser_viewer
    }
  }
`;

export default () => {
  return (
    <Container>
      <Row>
        <Col className="col-center" md="6">
          <Query query={UpdateViewerQuery} render={(viewer) => (
            <UpdateUser viewer={viewer}/>
          )}/>
        </Col>
      </Row>
    </Container>
  );
};
