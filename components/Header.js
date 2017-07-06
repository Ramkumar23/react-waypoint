/**
 * Created by ramkumar on 6/7/17.
 */

import React from 'react';
import { Row, PageHeader,Image} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Row>
                <PageHeader>
                    <p style={{color: 'white'}}> This is Header </p>
                </PageHeader>
            </Row>

        );
    }
}