import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Registration.css'

import { Container,
    Row, 
    Col } from 'reactstrap';

const registration = [
    {
        'title': 'Integrated Petroleum Convention & Exhibition 2019',
        'content': <div>
                    <p>Integrated Petroleum Convention and Exhibition (IPCONVEX) 2019 is a yearly grand seminar event that collaboration by HMTM “PATRA” ITB, IATMI SM ITB, and SPE ITB SC. In this seminar you will get bunch of advatages which are knowledge and insight about regulation and technical in oil and gas industry, know the research that have been developed by students across Indonesia, and design & inovation of oil rig in 2019.  Poster and oil rig design will be included in exhibition as the inovation from the competition.</p>
                </div>
    },
    {
        'title': 'Theme',
        'content':  <p>“Walking Through Petrotech to Improve Oil Revenue : With Enhanced Oil Recovery”</p>
    },
    {
        'title': 'Speakers',
        'content':  <div>
                        <h5>Session 1 (Regulation Session)</h5>
                        <Row className='align-items-center'>
                            <Col sm={3} className='speaker-image-container'>
                                <img 
                                    className='speaker-image'
                                    src={require('../../images/IPCONVEX/Purnomo Yusgiantoro.jpg.png')}
                                />
                            </Col>
                            <Col sm={9} className='speaker-content'>
                                <h6>President-Secretary General of OPEC in 2004 and Minister of Energy and Mineral Resources in 2001-2004 & 2004-2009</h6>
                                <h6>Prof&#8228; Dr&#8228; Ir&#8228; Purnomo Yusgiantoro (to be confirmed)</h6>
                            </Col>
                        </Row>
                        <Row className='align-items-center'>
                            <Col sm={3} className='speaker-image-container'>
                                <img 
                                    className='speaker-image'
                                    src={require('../../images/IPCONVEX/Djoko Siswanto.jpg.png')}
                                />
                            </Col>
                            <Col sm={9} className='speaker-content'>
                                <h6>Director General of Oil and Gas (Ministry of Energy and Mineral Resources)</h6>
                                <h6>Djoko Siswanto</h6>
                            </Col>
                        </Row>
                        <Row className='align-items-center'>
                            <Col sm={3} className='speaker-image-container'>
                                <img 
                                    className='speaker-image'
                                    src={require('../../images/IPCONVEX/placeholder foto speaker.png')}
                                />
                            </Col>
                            <Col sm={9} className='speaker-content'>
                                <h6>Deputy of Planning Satuan Kerja Khusus Pelaksana Kegiatan Usaha Hulu Minyak dan Gas Bumi</h6>
                                <h6>Jaffee Arizon Suardin (to be confirmed)</h6>
                            </Col>
                        </Row>
                        <h5>Session 2 (Regulation Season)</h5>
                        <Row className='align-items-center'>
                            <Col sm={3} className='speaker-image-container'>
                                <img 
                                    className='speaker-image'
                                    src={require('../../images/IPCONVEX/Tutuka Ariadji.jpg.png')}
                                />
                            </Col>
                            <Col sm={9} className='speaker-content'>
                                <h6>Chairman Society of Indonesian Petroleum Engineer </h6>
                                <h6>Prof&#8228; Ir&#8228; Tutuka Ariadji M&#8228;Sc&#8228;,Ph&#8228;D</h6>
                            </Col>
                        </Row>
                        <Row className='align-items-center'>
                            <Col sm={3} className='speaker-image-container'>
                                <img 
                                    className='speaker-image'
                                    src={require('../../images/IPCONVEX/Indra.jpg.png')}
                                />
                            </Col>
                            <Col sm={9} className='speaker-content'>
                                <h6>Manager of Tertiary Recovery Pertamina EP </h6>
                                <h6>Fransiskus Indra Purba</h6>
                            </Col>
                        </Row>
                    </div>
    },
    {
        'title': 'Venue & Date',
        'content':  <div>
                        <p>Venue &ensp; &ensp;: Aula Barat, Bandung Institute of Technology</p>
                        <p>Date &ensp; &ensp; &nbsp; &nbsp;: Saturday, February 16<sup>th</sup>, 2019</p>
                        <p>Time &ensp; &ensp; &nbsp; &nbsp;: 07.30 - 12.50</p>
                    </div>
    },
    {
        'title': 'Payment',
        'content':  <div>
                        <p>The payment fee is IDR 30.000 include Seminar Kit, Snack, and Certificate.</p>
                        <p>As for professionals, the payment fee is IDR 35,000</p>
                        <br/>
                        <p>The payment can be done via online or offline. For via online, you can transfer to:</p>
                        <p>1300016287826</p>
                        <p>Mandiri</p>
                        <p>Integrated Petroleum Festival</p>
                        <br />
                        <p>After paying the registration fees, you need to confirm your payment by showing the receipt payment to treasurer (Elizabeth Benedicta Pratidina Sinaga, Phone Number : 08568483488, LINE ID Number : elizabethbenedicta). For via offline, you can pay directly to the IPCONVEX booth located near ATM Center at Bandung Institute of Technology.</p>
                        <br/>
                        <p>CP : Luke Baskoro ( Phone Number : 081554414145, LINE ID Number : lukebaskoro20).</p>
                    </div>
    },
]
export default class IpconvexRegistration extends Component {
    constructor(props) {
        super(props);

        this.changeRegistrationContent = this.changeRegistrationContent.bind(this);

        this.state = {
            registrationContent: registration[0],
        }
    }

    changeRegistrationContent(event) {
        console.log(event.target.dataKey)
    }

    render() {
        return(
            <div>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../images/IPCONVEX/title.jpg')}
                        />
                    </div>
                    <Row className='registration-rules'>
                        <Col  className='registration-title' sm='3'> 
                            <p onClick={() => this.setState({registrationContent: registration[0]})}>
                                <strong>About IPCONVEX</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[1]})}>
                                <strong>Theme</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[2]})}>
                                <strong>Speakers</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[3]})}>
                                <strong>Venue & Date</strong>
                            </p>
                            <p onClick={() => this.setState({registrationContent: registration[4]})}>
                                <strong>Payment</strong>
                            </p>
                        </Col>
                        <Col className='registration-content' sm='9'> 
                            <h2> {this.state.registrationContent.title} </h2>
                            {this.state.registrationContent.content}
                        </Col>
                    </Row>
                    <Row className='justify-content-sm-center registration-button'>
                        <Col sm={4}>
                            <Link to='/registration-form/ipconvex'>
                                <div className='registration-button-red'>
                                    <h4>REGISTER NOW</h4>
                                </div>
                            </Link>    
                        </Col>
                        <Col sm={4} className='registration-button-blue'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7vEPtt-VApZs0qSrYdFSEblz6n_gO5IsSy6ugGktXBowYxw/viewform" target="__blank">
                                <h4>CONFIRM YOUR PAYMENT</h4>
                            </a>                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );  
    }
}