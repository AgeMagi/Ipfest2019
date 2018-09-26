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
                            <Link to='pre-event'>
                                <div className='event-type'>
                                    <h3>PRE-EVENTS</h3>
                                </div>  
                            </Link>
                        </Col>
                        <Col sm='3'>
                            <Link to='main-event'>
                                <div className='event-type'>
                                    <h3>MAIN EVENTS</h3>
                                </div> 
                            </Link>
                        </Col>
                        <Col sm='3'>
                            <Link to='/competition'>
                                <div className='event-type'>
                                    <h3>COMPETITIONS</h3>
                                </div>  
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}