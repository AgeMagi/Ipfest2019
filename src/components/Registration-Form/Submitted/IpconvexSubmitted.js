import React, { Component } from 'react';

import {
    Container,
    Row,
    Col,
    } from 'reactstrap';

import './Submitted.css';

export default class IpconvexSubmittedRegistration extends Component {


    render() {
        

        return(
            <div className='submit-registration'>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Registration/5_1_Register Now_Main Page.png')}
                        />                      
                    </div>
                    <Row className="justify-content-sm-center">
                        <Col sm={12}>
                            <div className='submitted-content'>
                                <h2>Thank you for joining Integrated Petroleum Convention and Exhibition (IPCONVEX) 2019&#8228; Entering the event requires participants to pay entry fee&#8228;</h2>
                                <h2>Below is your payment ID:</h2>
                                <div className="submit-id">
                                    <h4>The payment fees are IDR 25&#8228;000 include Seminar Kit, Snack, and Certificate&#8228;</h4>
                                    <br />
                                    <h4>The payment can be done via online or offline&#8228; For via online, you can transfered to Mandiri with  account number 1300016287826 named Integrated Petroleum Festival&#8228; After paying the registration fees, you need to confirm your payment by showing the receipt payment to treasurer (Elizabeth Benedicta Pratidina Sinaga, Phone Number : 08568483488, LINE ID Number : elizabethbenedicta)&#8228; For via offline, you can pay directly to the IPCONVEX booth located near ATM Center at Bandung Institute of Technology&#8228;</h4>
                                    <br />
                                    <h4>For more information, you can contact us through CP : Luke Baskoro ( Phone Number : 081554414145, LINE ID Number : lukebaskoro20) or by clicking our social media butons below&#8228;</h4>
                                </div>
                            </div>
                            <Row className="justify-content-sm-center">
                                <Col sm={9}>
                                    <h2>“Wisdom is not a product of schooling but of the lifelong attempt to acquire it&#8228;”</h2>
                                    <h2 style={{textAlign: "right"}}>- Albert Enstein</h2>
                                </Col>
                            </Row>
                        </Col>                            
                    </Row>  
                </Container>                
            </div>
        )
    }
}