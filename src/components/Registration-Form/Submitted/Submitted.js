import React, { Component } from 'react';

import {
    Container,
    Row,
    Col,
    } from 'reactstrap';

import './Submitted.css';

export default class SubmittedRegistration extends Component {


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
                        <Col sm={8}>
                            <div className='submitted-content'>
                                <h2>Congratulation! You and your team has been successfully registered to ipfest 2019&#8228;</h2>
                                <h2>Below is your payment ID:</h2>
                                <h1 className="submit-id">{this.props.match.params.id}</h1>
                                <h2>An e-mail consist of the payment ID has been sent to the team leader's e-mail&#8228;</h2>
                                <h2>For your convenience, we have also sent out the payment guideline for national and international delegates via e-mail&#8228;</h2>
                                <h2>Please make sure to check your spam folder too&#8228;</h2>
                            </div>
                        </Col>                            
                    </Row>  
                </Container>                
            </div>
        )
    }
}