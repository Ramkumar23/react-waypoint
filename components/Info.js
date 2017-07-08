/**
 * Created by ramkumar on 8/7/17.
 */

import React from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header>
                        <Modal.Title>
                            <span> <strong>{this.props.title}</strong> </span>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col xs={12}>
                                <p>
                                    {this.props.message}
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}><strong>Close</strong></Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}