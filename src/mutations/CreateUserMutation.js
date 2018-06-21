import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../createRelayEnvironment'
import {ConnectionHandler} from 'relay-runtime'

const mutation = graphql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      post {
        id
        name
        email
        active
      }
    }
  }
`;

let tempID = 0;

export default function CreateUserMutation(name, email, active, viewerId, callback) {
  const variables = {
    input: {
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
        const id = 'client:newUser:' + tempID++;
        const newPost = proxyStore.create(id, 'User');
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
        const createPostField = proxyStore.getRootField('createUser');
        const newPost = createPostField.getLinkedRecord('user');

        const viewerProxy = proxyStore.get(viewerId);
        const connection = ConnectionHandler.getConnection(viewerProxy, 'UserList_allUsers');
        if (connection)
          ConnectionHandler.insertEdgeAfter(connection, newPost)
      },
    },
  )
}
