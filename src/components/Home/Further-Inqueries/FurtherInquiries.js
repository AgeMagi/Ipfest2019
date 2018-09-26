import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { 
    FormGroup, 
    Label,
    Col,
    Row, 
    Input,
    Button,
    Container } from 'reactstrap'; 

import './FurtherInquiries.css';

const keys = require('../../../config/keys');
const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/${keys.googleFormID}/formResponse` 

var fields = {
    'fi-name': 'entry.1544451141',
    'fi-email': 'entry.1963978322',
    'fi-subject': 'entry.106366864',
    'fi-message': 'entry.546953101',
}

var $ = require('jquery');

class FurtherInquiries extends Component {
    constructor(props) {
        super(props);
    }

    renderField(field) {
        return (
            <Col sm={10}>
                <Input 
                    className="form-control" 
                    type={field.type} 
                    placeholder={field.placeholder} 
                    name={field.name}
                    id={field.id}
                    {...field.input}
                />
            </Col>
        )
    }

    submit(values) {
        let post_data = {};

        for (var field in fields) {
           post_data[fields[field]] = values[field];
        }

        $.post({
            url: GOOGLE_FORM_URL,
            data: post_data,
            complete: () => {
                alert('Your message has been submitted');
            }
        })
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div className="further-inquiries-container">
                <Container>
                    <div className="further-inquiries-title">
                        <h1>FURTHER INQUIRIES</h1>
                        <p>Write a message down here. We'll get back</p>
                        <p>to your e-mail as fast as possible</p>
                    </div>
                    <form className="row justify-content-sm-center" onSubmit={handleSubmit(this.submit.bind(this))}>
                        <Label for="text" sm={2}>
                            <h3>NAME</h3>
                        </Label>
                        <Field 
                            name="fi-name" 
                            id="fi-name"
                            placeholder="Input Your Name"
                            type="text"
                            component={this.renderField} 
                        />
                        <Label for="text" sm={2}>
                            <h3>EMAIL</h3>
                        </Label>
                        <Field 
                            name="fi-email" 
                            id="fi-email"
                            placeholder="Input Your E-mail"
                            type="text"
                            component={this.renderField} 
                        />
                        <Label for="text" sm={2}>
                            <h3>SUBJECT</h3>
                        </Label>
                        <Field 
                            name="fi-subject" 
                            id="fi-subject"
                            placeholder="Input Subject"
                            type="text"
                            component={this.renderField} 
                        />
                        <Label for="text" sm={2}>
                            <h3>MESSAGE</h3>
                        </Label>
                        <Field 
                            name="fi-message" 
                            id="fi-message"
                            placeholder="Input Your Message"
                            type="textarea"
                            component={this.renderField} 
                        />
                        <Col sm={3}>
                            <Button type="submit" className='fi-button btn btn-lg btn-block'>SUBMIT</Button>
                        </Col>
                    </form>
                </Container>
            </div>
        );
    }
}

export default reduxForm({
    form: 'furtherInquiries',
})(FurtherInquiries);