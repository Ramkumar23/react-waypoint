/**
 * Created by ramkumar on 6/7/17.
 */
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Layout from '../components/Layout';

export default class extends React.Component {
    render () {
        return <div>
            <Layout>
                <Jumbotron>
                    <p style={{color: 'red'}}>Hello World {this.props.userAgent}</p>
                </Jumbotron>
            </Layout>
        </div>
    }
}