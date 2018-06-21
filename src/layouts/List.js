import * as React from 'react';
import { UserList } from "../components";
import {
  Container
  , Row
  , Col
} from 'mdbreact';
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../createRelayEnvironment'
import ListActions from "../components/list-actions/ListActions";

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
          <QueryRenderer
            environment={environment}
            query={ListQuery}
            render={({ error, props }) => {
              if (error) return <div>{error.message}</div>;
              if (props) return <UserList viewer={props.viewer}/>;
              return <div>Loading...</div>;
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}