import * as React from 'react';
import {
  QueryRenderer
} from 'react-relay'
import environment from './createRelayEnvironment'

export const Query = ({ query, render}) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      render={({error, props}) => {
        if (error) return <div>{error.message}</div>;
        if (props) return render(props.viewer);
        return <div>Loading...</div>;
      }}/>
  );
};