/**
 * Created by ramkumar on 6/7/17.
 */
import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class extends React.Component {
    render () {
        return <div>
            <Jumbotron>
            <p style={{color: 'red'}}>Hello World {this.props.userAgent}</p>
            </Jumbotron>
        </div>
    }
}