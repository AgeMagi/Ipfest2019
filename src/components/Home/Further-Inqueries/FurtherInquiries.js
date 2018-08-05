import React, { Component } from 'react';

import { 
    FormGroup, 
    Label,
    Col,
    Row, 
    Input,
    Button,
    Container } from 'reactstrap'; 

import './FurtherInquiries.css';

export default class FurtherInquiries extends Component {
    render() {
        return(
            <div className="further-inquiries-container">
                <Container>
                    <div className="further-inquiries-title">
                        <h1>FURTHER INQUIRIES</h1>
                        <p>Write a message down here. We'll get back</p>
                        <p>to your e-mail as fast as possible</p>
                    </div>
                    <FormGroup row>
                        <Label for="text" sm={2}><h3>NAME</h3></Label>
                        <Col sm={10}>
                            <Input type="text" name="fi-name" id="fi-name" placeholder="Input Your Name" />
                        </Col>
                        <Label for="fi-email" sm={2}><h3>E-MAIL</h3></Label>
                        <Col sm={10}>
                            <Input type="text" name="fi-email" id="fi-email" placeholder="Input Your Email" />
                        </Col>
                        <Label for="fi-subject" sm={2}><h3>SUBJECT</h3></Label>
                        <Col sm={10}>
                            <Input type="text" name="fi-subject" id="fi-subject" placeholder="Input Subject" />
                        </Col>
                        <Label for="fi-message" sm={2}><h3>MESSAGE</h3></Label>
                        <Col sm={10}>
                            <Input type="textarea" name="fi-message" id="fi-message" placeholder="Input Your Message" />
                        </Col>
                    </FormGroup>
                    <FormGroup check>
                        <Row className="justify-content-sm-center">
                            <Col sm={3}> 
                                <Button className="fi-button btn btn-lg btn-block">SUBMIT</Button>
                            </Col> 
                        </Row>  
                    </FormGroup>
                </Container>
            </div>
        );
    }
}