/**
 * Created by ramkumar on 6/7/17.
 */

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Waypoint from 'react-waypoint';


export default class ImplWayonEnter extends React.Component {
    constructor(props) {
        super(props);
        this.alertme= this.alertme.bind(this);
    }
    alertme() {
        window.alert("Ada kiruku Payale... :)");
    }
    render() {
        return (
            <div>
                <Waypoint
                    onEnter={this.alertme}>
                    <div>
                        <Jumbotron>
                            <p style={{color: 'red'}}>  Vantan Da Vekkame ilama</p>
                        </Jumbotron>
                    </div>
                </Waypoint>
            </div>
        );
    }
}