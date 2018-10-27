import React, { Component } from 'react';

import {
    Container,
    Row,
    Col,
    } from 'reactstrap';

import './ConfirmedPayment.css';

export default class ConfirmedPayment extends Component {
    render() {
        return(
            <div className="payment-container">
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Registration/confirmed-payment.png')}
                        />
                    </div>
                    <div className='payment-content'>
                        <Row className='justify-content-sm-center'>
                            <Col sm={8}>
                                <h2>
                                    Congratulation! Your payment proof has been submitted&#8228; Please wait for our Delegates Relation to reach up to you by e-mail for upcaming confirmation due to your payment and registration&#8228;
                                </h2>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}