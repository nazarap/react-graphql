import * as React from 'react';
import { UserList } from "../components";
import {
  Container
  , Row
  , Col
} from 'mdbreact';
import { graphql } from 'react-relay'
import ListActions from "../components/list-actions/ListActions";
import {Query} from "../query";

const ListQuery = graphql`
  query ListQuery {
    viewer {
      ...UserList_viewer
    }
  }
`;

export default () => {
  return (
    <Container>
      <ListActions/>
      <Row>
        <Col lg="12" md="12" className="mb-lg-0 mb-12">
          <Query query={ListQuery} render={(viewer) => (
            <UserList viewer={viewer}/>
          )}/>
        </Col>
      </Row>
    </Container>
  );
}