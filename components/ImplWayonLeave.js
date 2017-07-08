/**
 * Created by ramkumar on 6/7/17.
 */

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import Info from './Info';


export default class ImplWayonLeave extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            show: false
        };
    }

    render() {
        let close= () => this.setState({ show: false });

        return (
            <div style={{height: '70vh'}}>
                <Waypoint
                    onLeave={ () => this.setState({ show: true })}>
                    <div>
                        <Jumbotron>
                            <p style={{color: 'red'}}> !st Content</p>
                        </Jumbotron>
                    </div>
                </Waypoint>
                <Info
                    title="onEnter Info"
                    message="Poran Paru Vekkame ilama"
                    onHide={close}
                    show={this.state.show} />
            </div>
        );
    }
}