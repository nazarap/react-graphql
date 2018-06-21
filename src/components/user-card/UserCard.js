import * as React from 'react';
import './UserCard.css';
import {
  Card
  , CardBody
  , CardTitle
  , CardText
  , Button
} from 'mdbreact';
import { Link } from 'react-router-dom';
import Active from "../active/Active";
import RandomImage from "../random-image/RandomImage";
import { DeleteUserMutation } from '../../mutations';
import {
  createFragmentContainer
  , graphql
} from 'react-relay'

class UserCard extends React.Component {

  constructor(props) {
    super(props);
    this._deleteUser = this._deleteUser.bind(this);
  }

  _deleteUser() {
    DeleteUserMutation(this.props.user.id, this.props.viewer.id)
  }

  render() {
    const user = this.props.user;
    return (
      <Card className="users__card col col-md-3">
        <RandomImage alt={user.name}/>
        <CardBody className="text-center">
          <CardTitle tag="h5">{user.name}
            <Active active={user.active}/>
          </CardTitle>
          <CardText>{user.email}</CardText>

          <Link to={`/edit/${user.id}`}>
            <Button outline={true}
                    className="users__card col col-md-7 without-shadow">
              Edit</Button>
          </Link>

          <Button outline={true}
                  className="users__card col col-md-7 without-shadow"
                  color="danger"
                  onClick={this._deleteUser}>
            Delete</Button>
        </CardBody>
      </Card>
    );
  };
}
export default createFragmentContainer(UserCard, graphql`
  fragment UserCard_viewer on Viewer {
    id
  }
  fragment UserCard_user on User {
    id
    name
    email
    active
  }
`);