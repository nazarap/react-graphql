import * as React from 'react';
import './UpdateUser.css';
import { Input, Button, Card, CardBody, Col } from 'mdbreact';
import { Link } from 'react-router-dom';

export default class UpdateUser extends React.Component {
    constructor(props) {
        super(props);
        const user = props.user;

        this.title = user ? `Edit ${user.name} user` : 'Create new user';
    }

    render() {
        return (
            <Card className="update-user">
                <CardBody>
                    <form>
                        <p className="h4 text-center py-4">{this.title}</p>
                        <div className="grey-text">
                            <Col className="col-center" md="8">
                                <Input label="Your name" type="text" validate={true} success="right"/>
                                <Input label="Your email" type="email" validate={true} error="wrong" success="right"/>
                                <div className="form-check my-3 update-user__checkbox">
                                    <input type="checkbox" className="form-control form-check-input text-left"
                                           value=""/>
                                    <label className="form-check-label mr-5">User is active</label>
                                </div>
                            </Col>
                        </div>
                        <div className="text-right py-4 mt-3">
                            <Button color="cyan" type="submit">Update</Button>
                            <Link to="/list">
                                <Button color="cyan" type="submit">Cancel</Button>
                            </Link>
                        </div>
                    </form>
                </CardBody>
            </Card>
        );
    }
};
