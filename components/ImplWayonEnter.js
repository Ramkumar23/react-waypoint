/**
 * Created by ramkumar on 6/7/17.
 */

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import Info from './Info';


export default class ImplWayonEnter extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            show: false
        };
    }

    render() {
        let close= () => this.setState({ show: false });
        return (
            <div style={{height: '40vh'}}>
                <Waypoint
                    onEnter={ () => this.setState({ show: true })}>
                    <div>
                        <Jumbotron>
                            <p style={{color: 'red'}}> 2nd component</p>
                        </Jumbotron>
                    </div>
                </Waypoint>
                <Info
                    title="onEnter Info"
                    message="Vantan Da Vekkame ilama"
                    onHide={close}
                    show={this.state.show} />
            </div>
        );
    }
}