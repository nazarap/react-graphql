import * as React from 'react';
import {
  Row
  , Col
  , Button
  , Modal
  , ModalBody
  , ModalHeader
  , ModalFooter
} from 'mdbreact';
import { Link } from 'react-router-dom';

export default class ListActions extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      filterModal: false
    };
    this._filterToggle = this._filterToggle.bind(this);
  }

  _filterToggle() {
    this.setState(prevState => ({
      filterModal: !prevState.filterModal
    }));
  }

  render() {
    return (
      <div>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          <Row>
            <Col lg="6" md="6" className="mb-lg-0 6">
              User list</Col>

            <Col lg="6" md="6" className="mb-lg-0 6">
              <Button className="without-shadow"
                      color="info"
                      onClick={this._filterToggle}>
                Filter</Button>

              <Link to="/create">
                <Button className="without-shadow">
                  Create user</Button>
              </Link>
            </Col>
          </Row>
        </h2>
        <Modal isOpen={this.state.filterModal} toggle={this._filterToggle} side position="top-right">
          <ModalHeader toggle={this._filterToggle}>Modal title</ModalHeader>
          <ModalBody>
            (...)
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this._filterToggle}>Close</Button>{' '}
            <Button color="primary">Search</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}