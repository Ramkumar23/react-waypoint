/**
 * Created by ramkumar on 6/7/17.
 */

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const mainClass= "main";
const FooterClass= "foot";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={{padding: '0px 25px'}}>
                <Header />
                <Grid>
                    <Row>
                        <div className={ mainClass }>
                            <Col>
                                {this.props.children}
                            </Col>
                        </div>
                    </Row>
                </Grid>
                <div className={FooterClass}>
                    <Footer />
                </div>
                <style jsx>{`
                    .main {
                        padding: 10px 0;
                    }
                    .foot {
                        boxShadow: 0px 5000px 0px 5000px 'grey';
                    }
                `}</style>
            </div>
        );
    }
}