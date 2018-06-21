import * as React from 'react';
import './UserList.css';
import { CardGroup } from 'mdbreact';
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import UserCard from '../user-card/UserCard'

class UserList extends React.Component {
  render() {
    return <CardGroup className="users">
      <div className="d-flex flex-wrap justify-content-center no-gutters">
        {this.props.viewer.allUsers.edges.map(({node}) =>
          <UserCard user={node}
                    key={node.id}
                    viewer={this.props.viewer}/>
        )}
      </div>
    </CardGroup>;
  }
}

export default createFragmentContainer(UserList, graphql`
  fragment UserList_viewer on Viewer {
    ...UserCard_viewer
    allUsers(last: 100) @connection(key: "UserList_allUsers", filters: []) {
      edges {
        node {
          id
          name
          email
          active
          ...UserCard_user
        }
      }
    }
  }
`)