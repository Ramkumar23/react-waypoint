/**
 * Created by ramkumar on 6/7/17.
 */

import React from 'react';
import { Row, Col, PageHeader,Image, Media} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Row style={{ color: 'white', padding: 25 }}>
                    <Col xs={8}>
                        <h2> Ramkumar </h2>
                    </Col>
                    <Col xs={3} xsOffset={1}>
                        <div style= {{ padding: '25px 0'}}>
                            <Image  style={{float: 'right'}} src="https://avatars.githubusercontent.com/ramkumar23?v=10&s=30" responsive rounded />
                        </div>
                    </Col>
            </Row>
        );
    }
}