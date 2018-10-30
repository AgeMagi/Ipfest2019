import React, { Component } from 'react';

import {
    Row,
    Col,
    Container,
    } from 'reactstrap';

import './MudInnovation.css';

export default class MudInnovativionRegistration extends Component {
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
                        <h1>MUD INNOVATIVE COMPETITION</h1>
                    </div>
                    <iframe name='hidden_iframe' id='hidden_iframe' className='hidden_iframe' onLoad={() => {
                        if (this.state.submitted) {window.location=`http://ipfest2019.com/registration/submitted/${this.state.id}`};
                    }}></iframe>
                    <form
                        action='https://docs.google.com/forms/u/3/d/e/1FAIpQLSfGninN-XgJd7WZbqFvbb-WzYZgwhHgBqbuPIltZPLKzxCDlA/formResponse'
                        target='hidden_iframe'
                        method='POST'
                        id='mG61Hd'
                        onSubmit={this.state.submitted = true}
                    >
                        <input 
                            type='hidden'
                            value={this.state.id}
                            name='entry.1722281047'
                        />
                        <Row>
                            <Col sm={4}>
                                <h2>UNIVERSITY</h2>
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
                                <h2>TEAM'S NAME</h2>
                            </Col>
                            <Col sm={8}>
                                <input 
                                    type='text'
                                    className='form-control form-registration'
                                    name='entry.1651827800'
                                />
                            </Col>
                        </Row>
                        <div className='registration-form-individual'>
                            <h4>TEAM LEADER IDENTITY</h4>
                            <Row>
                                <Col sm={4}>
                                    <h6>FULL NAME</h6>
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
                                    <h6>ID Number/Passport Number</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.1017345131'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h6>Students ID Number</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.595254257'
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
                        </div>
                        <div className='registration-form-individual'>
                            <h4>1<sup>st</sup> TEAM MEMBER IDENTITY</h4>
                            <Row>
                                <Col sm={4}>
                                    <h6>FULL NAME</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.1402810883'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h6>ID Number/Passport Number</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.1763774137'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h6>Students ID Number</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.249986269'
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
                                        name='entry.592619053'
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className='registration-form-individual'>
                            <h4>2<sup>nd</sup> TEAM MEMBER IDENTITY</h4>
                            <Row>
                                <Col sm={4}>
                                    <h6>FULL NAME</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.113922383'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h6>ID Number/Passport Number</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.490246767'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <h6>Students ID Number</h6>
                                </Col>
                                <Col sm={8}>
                                    <input 
                                        type='text'
                                        className='form-control form-registration-individual'
                                        name='entry.800450108'
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
                                        name='entry.293024271'
                                    />
                                </Col>
                            </Row>
                        </div>
                        <a href={`https://docs.google.com/forms/d/e/1FAIpQLSdqaQ9s9jgCnMn-jw3X2zicLFFbp5J2CqomDJhbuVCS1e6evw/viewform?entry.1885496459=${this.state.id}`} target="__blank">
                            <h2 className='upload-photo disabled' onClick={() => this.enabledSubmit()}>Upload Photo</h2>
                        </a>
                        <button type='submit' className='submit-form-registration' disabled={this.state.submitDisabled}>SUBMIT</button>
                    </form>
                </Container>  
            </div>
        )
    }
}