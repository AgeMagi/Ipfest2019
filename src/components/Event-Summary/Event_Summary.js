import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import './Event_Summary.css'
export default class Event_Summary extends Component {
    render() {
        return(
            <div>
                <Container className="event-summary-container">
                    <Row>
                        <Col sm="6"> 
                            <h1>Tackling the Challenge</h1>
                            <p>As the demand of energy increases, we are responsible 
                                to provide the sustainibility of energy. In order to 
                                aim it, we are supposed to think globally and visionary 
                                along with our values in order to get the glory.</p>
                        </Col>
                        <Col sm="6">
                            <Row>
                                <Col sm="4" className="event-type"> 
                                
                                </Col>
                                <Col sm="4" className="event-type"> 
                                
                                </Col>
                                <Col sm="4" className="event-type"> 
                                
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className="event-type"> 
                                    <div className="event-type-image">

                                    </div>
                                </Col>
                                <Col sm="6" className="event-type"> 
                                
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/* <Grid>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={6}>
                            <h1>Tackling the Challenge</h1>
                            <p>As the demand of energy increases, we are responsible 
                                to provide the sustainibility of energy. In order to 
                                aim it, we are supposed to think globally and visionary 
                                along with our values in order to get the glory.</p>
                        </Grid.Column>
                        <Grid.Column className="event-type"width={2}>
                            <img src={require("../../images/Synergistic.png")}/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            HAII
                        </Grid.Column>
                        <Grid.Column width={2}>
                            HAII
                        </Grid.Column>
                        <Grid.Column width={2}>
                            HAII
                        </Grid.Column>
                        <Grid.Column width={2}>
                            HAII
                        </Grid.Column>
                    </Grid.Row>
                </Grid> */}
            </div>
        );
    }
}