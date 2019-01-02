import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
    } from 'reactstrap';

export default class ProfessionalIpconvexRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            submitted: false,
            id: '_' + Math.random().toString(36).substr(2, 9),
            submitDisabled: true,
        })

        this.enabledSubmit = this.enabledSubmit.bind(this);
    }

    enabledSubmit() {
        this.setState({
            submitDisabled: false,
        })
    }

    render() {
        return(
            <div className='registration-form'>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Registration/5_1_Register Now_Main Page.png')}
                        />
                    </div>
                    <div className='registration-form-title'>
                        <h1>INTEGRATED PETROLEUM CONVENTION & EXHIBITION 2019</h1>
                    </div>
                    <iframe name='hidden_iframe' id='hidden_iframe' className='hidden_iframe' onLoad={() => {
                        if (this.state.submitted) {window.location=`http://ipfest2019.com/registration/submitted/${this.state.id}`};
                    }}></iframe>
                    <form
                        action='https://docs.google.com/forms/u/3/d/e/1FAIpQLSfh7H0vRqCtZioKX6LvgNSxcZYQxnHTXySmgQ-v9MuUjB1Fig/formResponse'
                        target='hidden_iframe'
                        method='POST'
                        id='mG61Hd'
                    >
                        <input 
                            type='hidden'
                            value={this.state.id}
                            name='entry.1242528204'
                        />
                        <Row>
                            <Col sm={4}>
                                <h2>FULL NAME</h2>
                            </Col>
                            <Col sm={8}>
                                <input 
                                    type='text'
                                    className='form-control form-registration'
                                    name='entry.1674054773'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <h6>Company</h6>
                            </Col>
                            <Col sm={8}>
                                <input 
                                    type='text'
                                    className='form-control form-registration-individual'
                                    name='entry.388876215'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <h6>ID Card Number(KTP/SIM/Passport</h6>
                            </Col>
                            <Col sm={8}>
                                <input 
                                    type='text'
                                    className='form-control form-registration-individual'
                                    name='entry.1582990724'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <h6>Phone Number</h6>
                            </Col>
                            <Col sm={8}>
                                <input 
                                    type='text'
                                    className='form-control form-registration-individual'
                                    name='entry.1582990724'
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <h6>E-Mail</h6>
                            </Col>
                            <Col sm={8}>
                                <input 
                                    type='text'
                                    className='form-control form-registration-individual'
                                    name='entry.1582990724'
                                />
                            </Col>
                        </Row>
                        <button type='submit' className='submit-form-registration' onClick={() => (this.setState({submitted: true}))}>SUBMIT</button>
                    </form>
                </Container>  
            </div>
        )
    }
}