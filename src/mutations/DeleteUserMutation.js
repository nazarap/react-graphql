import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import environment from '../createRelayEnvironment'

const mutation = graphql`
    mutation DeleteUserMutation($input: DeleteUserInput!) {
        deleteUser(input: $input) {
            deletedId
        }
    }
`;

export default function DeleteUserMutation(userId, viewerId) {
  const variables = {
    input: {
      id: userId,
      clientMutationId: ""
    },
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      updater: (proxyStore) => {
        const deleteUserField = proxyStore.getRootField('deleteUser');
        const deletedId = deleteUserField.getValue('deletedId');
        const viewerProxy = proxyStore.get(viewerId);
        const connection = ConnectionHandler.getConnection(viewerProxy, 'UserList_allUsers');
        ConnectionHandler.deleteNode(connection, deletedId);
      }
    },
  )
}