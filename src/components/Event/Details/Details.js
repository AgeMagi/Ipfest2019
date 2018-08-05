import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,
    Row,
    Col } from 'reactstrap';

import './Details.css';

export default class Details extends Component {
    render() {
        return(
            <div className='details-event'>
                <Container>
                    <h1> DETAILS </h1>
                    <Row className="justify-content-sm-center">
                        <Col sm='3'>
                            <a href='events/pre-events'>
                                <div className='event-type'>
                                    <h3>PRA EVENTS</h3>
                                </div>  
                            </a>
                        </Col>
                        <Col sm='3'>
                            <a href='events/main-events'>
                                <div className='event-type'>
                                    <h3>MAIN EVENTS</h3>
                                </div>  
                            </a>
                        </Col>
                        <Col sm='3'>
                            <a href='events/competitions'>
                                <div className='event-type'>
                                    <h3>COMPETITIONS</h3>
                                </div>  
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}