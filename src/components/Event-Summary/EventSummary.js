import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import './EventSummary.css'
export default class EventSummary extends Component {
    render() {
        return(
            <div className="event-summary-container">
                <Container>
                    <Row>
                        <Col sm="6"> 
                            <div className="event-summary-text">
                                <h1>Tackling the Challenge</h1>
                                <p>As the demand of energy increases, we are responsible 
                                    to provide the sustainibility of energy. In order to 
                                    aim it, we are supposed to think globally and visionary 
                                    along with our values in order to get the glory.</p>
                            </div>   
                        </Col>
                        <Col sm="6">
                            <Row className="justify-content-sm-center">
                                <Col sm="4"> 
                                    <div className="event-type-image">
                                        <img 
                                            src={require("../../images/Synergistic.png")}
                                        />
                                    </div>
                                    <p>Synergistic</p>
                                </Col>
                                <Col sm="4"> 
                                    <div className="event-type-image">
                                        <img 
                                            src={require("../../images/Insightful.png")}
                                        />
                                    </div>
                                    <p>Insightful</p>
                                </Col>
                                <Col sm="4"> 
                                    <div className="event-type-image">
                                        <img 
                                            src={require("../../images/Experience.png")}
                                        />
                                    </div>
                                    <p>Experience</p>
                                </Col>
                            </Row>
                            <Row className="justify-content-sm-center">
                                <Col sm="4"> 
                                    <div className="event-type-image">
                                        <img 
                                            src={require("../../images/Innovative.png")}
                                        />
                                    </div>
                                    <p>Innovative</p>
                                </Col>
                                <Col sm="4"> 
                                    <div className="event-type-image">
                                        <img 
                                            src={require("../../images/Impactfuls.png")}
                                        />
                                    </div>
                                    <p>Impactful</p>
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