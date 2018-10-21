import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'
import { Container,
    Row,
    Col, } from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <Container>
                    <Row>
                        <Col sm={3}> 
                            <img 
                                className="footer-logo"
                                src={require('../../images/Logo.png')}
                            />
                            <Row className="footer-socmed justify-content-sm-center">
                                <Col sm={3}>
                                    <a href='https://www.facebook.com/ipfest2019/' target='__blank'>
                                        <img 
                                            src={require('../../images/Facebook.png')}
                                        />
                                    </a>                                    
                                </Col>
                                <Col sm={3}>
                                    <a href='https://www.instagram.com/ipfest2019/' target='__blank'>
                                        <img 
                                            src={require('../../images/Instagram.png')}
                                        />
                                    </a>                                    
                                </Col>
                                <Col sm={3}>
                                    <a href='https://timeline.line.me/user/_dbZ9wAOoBIL3b4HxrIewfY34pkLQiZjyaHgWYxk' target='__blank'>
                                        <img 
                                            src={require('../../images/Line.png')}
                                        />
                                    </a>                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col className="footer-content" sm={3}> 
                            <h2>EVENTS</h2>
                            <Link to='/event/pre-event'> 
                                <p>High School Visit</p>
                            </Link>
                            <Link to='/event/pre-event'> 
                                <p>Blood Donation</p>
                            </Link>                            
                            <Link to='/event/pre-event'> 
                                <p>Energy Campaign Labyrinth</p>
                            </Link>                            
                            <Link to='/event/pre-event'> 
                                <p>Medical Checkup</p>
                            </Link>                            
                            <Link to='/event/pre-event'> 
                                <p>IPGL</p>
                            </Link>                            
                            <Link to='/event/pre-event'> 
                                <p>Goes to Orphanage</p>
                            </Link>          
                            <Link to='/event/main-event'>
                                <p>IPConvex</p>
                            </Link>                                  
                            <Link to='/event/main-event'>
                                <p>Touring PVI & Networking Day</p>
                            </Link> 
                            <Link to='/event/main-event'>
                                <p>Gala Dinner</p>
                            </Link>                            
                        </Col>
                        <Col className="footer-content" sm={3}> 
                            <h2>COMPETITIONS</h2>
                            <Link to='/competition/oil-rig-design-competition'>
                                <p>Oil Rig Design Competition</p>
                            </Link>                            
                            <Link to='/competition/petrodebate-competition'>
                                <p>PetroDebate Competition</p>
                            </Link>                            
                            <Link to='/competition/mud-innovation-competition'>
                                <p>Mud Innovative Competition</p>
                            </Link>                            
                            <Link to='/competition/paper-poster-competition'>
                                <p>Paper and Poster Competition</p>
                            </Link>                            
                            <Link to='/competition/smart-competition'>
                                <p>Smart Competition</p>
                            </Link>                            
                            <Link to='/competition/business-case-competition'>
                                <p>Business Case Competition</p>
                            </Link>                            
                            <Link to='/competition/plan-of-development-competition'>
                                <p>Plan of Development Competition</p>
                            </Link>                            
                        </Col>
                        <Col className="footer-content" sm={3}> 
                            <h2>NEWS</h2>
                            <p>News 1</p>
                            <p>News 1</p>
                            <p>News 1</p>
                            <p>News 1</p>
                            <p>News 1</p>
                            <p>News 1</p>
                            <p>News 1</p>
                        </Col>
                    </Row>
                </Container>
                <p className="footer-copyright">copyright © ipfest2019.com | powered by muhhabibih@gmail.com</p>
            </div>
        );
    }
}