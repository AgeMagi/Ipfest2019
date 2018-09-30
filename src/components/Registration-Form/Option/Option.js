import React, { Component } from 'react';

import {
    Container,
    } from 'reactstrap';

import './Option.css';

export default class OptionRegistration extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Registration/5_1_Register Now_Main Page.png')}
                        />
                    </div>
                    <div className='registration-option'>
                        <h2><strong>CHOOSE YOUR COMPETITION</strong></h2>
                        <h4>SMART COMPETITION</h4>
                        <h4>PLAN OF DEVELOPMENT COMPETITION</h4>
                        <h4>MUD INNOVATIVE COMPETITION</h4>
                        <h4>OIL RIG DESIGN COMPETITION</h4>
                        <h4>PAPER AND POSTER COMPETITION</h4>
                        <h4>BUSINESS CASE COMPETITION</h4>
                        <h4>PETRODEBATE COMPETITION</h4>
                    </div>
                </Container>
            </div>
        )
    }
}