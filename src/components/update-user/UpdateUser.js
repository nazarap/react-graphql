import * as React from 'react';
import './UpdateUser.css';
import {
  Input
  , Button
  , Card
  , CardBody
  , Col
} from 'mdbreact';
import { Link } from 'react-router-dom';
import {
  CreateUserMutation
  , UpdateUserMutation
} from "../../mutations";
import User from "../../domains/User";
import { withRouter } from 'react-router-dom';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    const user = props.viewer.User;

    this.state = {
      user: user ? user : new User()
    };
    this.title = user ? `Update '${user.name}' user` : "Create new user!";
    this.updateButton = user ? `Update` : "Create";
    this._updateUser = this._updateUser.bind(this);
    this._fieldChange = this._fieldChange.bind(this);
  }

  _updateUser() {
    const { user: { id, name, email, active }} = this.state;
    if(!name || !email) return;
    (id ? UpdateUserMutation : CreateUserMutation)(id, name, email, active, this.props.viewer.id, () => this.props.history.replace('/'));
  }

  _fieldChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  render() {
    const { user } = this.state;

    return (
      <Card className="update-user">
        <CardBody>
          <form>
            <p className="h4 text-center py-4">{ this.title }</p>
            <div className="grey-text">
              <Col className="col-center" md="8">
                <Input label="Your name"
                       type="text"
                       name="name"
                       value={ user.name }
                       onChange={ this._fieldChange }
                       validate={true}
                       success="right"/>

                <Input label="Your email"
                       type="email"
                       name="email"
                       value={ user.email }
                       onChange={ this._fieldChange }
                       validate={true}
                       error="wrong"
                       success="right"/>

                <div className="form-check my-3 update-user__checkbox">
                  <input type="checkbox"
                         name="active"
                         className="form-control form-check-input text-left"
                         onChange={ this._fieldChange }
                         value={ user.active }/>

                  <label className="form-check-label mr-5">
                    User is active</label>
                </div>
              </Col>
            </div>
            <div className="text-right py-4 mt-3">
              <Button color="cyan"
                      onClick={ this._updateUser }>
                { this.updateButton }</Button>

              <Link to="/">
                  <Button color="cyan"
                          type="submit">
                  Cancel</Button>
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    );
  }
}

const FragmentContainer = createFragmentContainer(UpdateUser, graphql`
  fragment UpdateUser_viewer on Viewer {
    User (id: "cjiopyfnyqqkl0183wh80xt0t") {
        id
        name,
        email,
        active
    }
  }
`);

export default withRouter(FragmentContainer);