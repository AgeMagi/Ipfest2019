import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    } from 'reactstrap';

import './MainPage.css';
import '../../../index.css';

export default class MainPageRegistration extends Component {
    render() {
        return(
            <div>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Registration/5_1_Register Now_Main Page.png')}
                        />
                    </div>
                    <div className='registration-guidline'>
                        <h2><strong>REGISTRATION GUIDLINE</strong></h2>
                        <ol>
                            <li>
                                <p>Click on the <span className='blue'>Continue Registration</span> </p>
                            </li>
                            <li>
                                <p>Choose the competition that you want to join.</p>
                            </li>
                            <li>
                                <p>Fill out the registration form with your data correctly (Make sure the photo that you uploaded is <span className='red'>no bigger than 2 mb</span>).</p>
                            </li>
                            <li>
                                <p>Chek your data before you submit.</p>
                            </li>
                            <li>
                                <p>Click <span className='blue'>Submit</span> and you will receive your <span className='red'>payment ID</span> and the details of the payment methods in your email.</p>
                            </li>
                            <li>
                                <p>Pay the registration fee before <span className='red'>48 hours</span> (Make sure that you are making the payment in one receipt).</p>
                                <p>After making the full payment, go to <span className='red'>ipfest2019.com/paymentconfirmation</span> and fill out your ID, team name, competition, and upload the payment proof (no bigger than 2 mb, and if you are paying via mobile banking, upload the screenshot of the payment proof).</p>
                            </li>
                            <li>
                                <p>If your payment is correct, you will then receive an email indicting that your payment has been verrified, and the registration process is compete.</p>
                            </li>
                            <li>
                                <p>If you encounter a problem, immediately tell us by sending email to deletgaterelationsipfest@gmail.com or contact via WhatsApp +6281394619995</p>
                            </li>
                        </ol>
                    </div>
                    <Row className='justify-content-sm-center registration-button'>
                            <Col sm={4}>
                                <Link to='/registration-form/option'>
                                    <div className='registration-button-blue'>
                                        <h4>CONTINUE REGISTRATION</h4>
                                    </div>
                                </Link>       
                            </Col>
                    </Row>
                </Container>
            </div>
        )
    }
} 