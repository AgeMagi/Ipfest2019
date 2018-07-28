import React, { Component } from 'react';

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
                                    <img 
                                        src={require('../../images/Facebook.png')}
                                    />
                                </Col>
                                <Col sm={3}>
                                    <img 
                                        src={require('../../images/Instagram.png')}
                                    />
                                </Col>
                                <Col sm={3}>
                                    <img 
                                        src={require('../../images/Line.png')}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="footer-content" sm={3}> 
                            <h2>EVENTS</h2>
                            <p>High School Visit</p>
                            <p>Blood Donation</p>
                            <p>Energy Campaign Labyrinth</p>
                            <p>Medical Checkup</p>
                            <p>IPGL</p>
                            <p>Goes to Orphanage</p>
                            <p>IPConvex</p>
                            <p>Touring PVI & Networking Day</p>
                            <p>Gala Dinner</p>
                        </Col>
                        <Col className="footer-content" sm={3}> 
                            <h2>COMPETITIONS</h2>
                            <p>Oil Rig Design Competition</p>
                            <p>PetroDebate Competition</p>
                            <p>Mud Innovative Competition</p>
                            <p>Paper and Poster Competition</p>
                            <p>Smart Competition</p>
                            <p>Business Case Competition</p>
                            <p>Plan of Development Competition</p>
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
                <p className="footer-copyright">copyright © ipfest2019.com | powered by @muhhabibih@gmail.com</p>
            </div>
        );
    }
}