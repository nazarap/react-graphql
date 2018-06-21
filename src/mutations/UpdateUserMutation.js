import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../createRelayEnvironment'
import {ConnectionHandler} from 'relay-runtime'

const mutation = graphql`
  mutation UpdateUserMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        name
        email
        active
      }
    }
  }
`;

export default function UpdateUserMutation(id, name, email, active, viewerId, callback) {
  const variables = {
    input: {
      id,
      name,
      email,
      active,
      clientMutationId: ""
    },
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback();
      },
      onError: err => console.error(err),
      optimisticUpdater: (proxyStore) => {
        const newPost = proxyStore.get(id, 'User');
        newPost.setValue(id, 'id');
        newPost.setValue(name, 'name');
        newPost.setValue(email, 'email');
        newPost.setValue(active, 'active');

        const viewerProxy = proxyStore.get(viewerId);
        const connection = ConnectionHandler.getConnection(viewerProxy, 'UserList_allUsers');
        if (connection)
          ConnectionHandler.insertEdgeAfter(connection, newPost)
      },
      updater: (proxyStore) => {
        const updatePostField = proxyStore.getRootField('updateUser');
        const updatePost = updatePostField.getLinkedRecord('user');

        const viewerProxy = proxyStore.get(viewerId);
        const connection = ConnectionHandler.getConnection(viewerProxy, 'UserList_allUsers');
        if (connection)
          ConnectionHandler.insertEdgeAfter(connection, updatePost)
      },
    },
  )
}
