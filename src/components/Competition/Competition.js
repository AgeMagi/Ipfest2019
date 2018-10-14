import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to='smart-competition'>
                            <Col sm={3} className='competition-logo'>
                                <img 
                                    src={require('../../images/Competition/Smart.png')}
                                />
                            </Col>
                        </Link>        
                        <Link to='oil-rig-design-competition'>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Competition/ORDC.png')}
                                />
                            </Col>
                        </Link>                
                        <Link to='business-case-competition'>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Competition/BCC.png')} 
                                />
                            </Col>
                        </Link>
                    </Row>
                    <Row className='competition-topic justify-content-sm-between'>
                        <Link to='plan-of-development-competition'>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Competition/POD.png')}
                                />
                            </Col>
                        </Link>
                        <Link to='mud-innovation-competition'>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Competition/Mud.png')}
                                />
                            </Col>
                        </Link>
                        <Link to='petrodebate-competition'>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Competition/PetroDebate.png')} 
                                />
                            </Col>
                        </Link>
                    </Row>
                    <Row className='competition-topic justify-content-sm-between'>
                        <Col sm={3}>
                        </Col>
                        <Link to='paper-poster-competition'>
                            <Col sm={3}>
                                <img 
                                    src={require('../../images/Competition/Paper and Poster Comp.png')}
                                />
                            </Col>
                        </Link>                        
                        <Col sm={3}>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}