import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';

import './Competition.css';

import { Row,
    Col,
    Container } from 'reactstrap';

export default class Competition extends Component {
    render() {
        return(
            <div className='event-competition'>
                <div className="competition-title">
                    <img 
                        src={require('../../images/Competition/Competition Title.png')}
                    />
                </div>
                <Container className='competition'>
                    <Row className='competition-topic justify-content-sm-between'>
                        <Col sm={3}>
                            <img 
                                src={require('../../images/Competition/Smart.png')}
                            />
                        </Col>
                        <Col sm={3}>
                            <img 
                                src={require('../../images/Competition/ORDC.png')}
                            />
                        </Col>
                        <Col sm={3}>
                            <img 
                                src={require('../../images/Competition/BCC.png')} 
                            />
                        </Col>
                    </Row>
                    <Row className='competition-topic justify-content-sm-between'>
                        <Col sm={3}>
                            <img 
                                src={require('../../images/Competition/POD.png')}
                            />
                        </Col>
                        <Col sm={3}>
                            <img 
                                src={require('../../images/Competition/Mud.png')}
                            />
                        </Col>
                        <Col sm={3}>
                            <img 
                                src={require('../../images/Competition/PetroDebate.png')} 
                            />
                        </Col>
                    </Row>
                    <Row className='competition-topic justify-content-sm-between'>
                        <Col sm={3}>
                        </Col>
                        <Col sm={3}>
                            <img 
                                src={require('../../images/Competition/Paper and Poster Comp.png')}
                            />
                        </Col>
                        <Col sm={3}>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}