const {
  Environment
  , Network
  , RecordSource
  , Store
} = require('relay-runtime');


function fetchQuery(operation, variables) {

  return fetch(
    'https://api.graph.cool/relay/v1/cjhriygub1ujp0162c99ieakf'
    , {
      method: 'POST'
      , headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      , body: JSON.stringify({
        query: operation.text
        , variables
      })
    }
  ).then(response => response.json());

}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network
  , store
})
