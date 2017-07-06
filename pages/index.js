/**
 * Created by ramkumar on 6/7/17.
 */
import React from 'react';
import { Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import ImplWayonEnter from '../components/ImplWayonEnter';
import ImplWayonLeave from '../components/ImplWayonLeave';

export default class extends React.Component {
    render () {
        return (
            <div>
                <Layout>
                    <Row>
                        <ImplWayonEnter />
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <Row>
                        <ImplWayonLeave />
                    </Row>
                </Layout>
            </div>
        );
    }
}