import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to='/registration/smart'>
                            <h4>SMART COMPETITION</h4>
                        </Link>
                        <Link to='/registration/plan-of-development'>
                            <h4>PLAN OF DEVELOPMENT COMPETITION</h4>
                        </Link>
                        <Link to='/registration/mud-innovative'>
                            <h4>MUD INNOVATIVE COMPETITION</h4>
                        </Link>
                        <Link to='/registration/oil-rig-design'>
                            <h4>OIL RIG DESIGN COMPETITION</h4>
                        </Link>
                        <Link to='/registration/paper-and-poster'>
                            <h4>PAPER AND POSTER COMPETITION</h4>
                        </Link>
                        <Link to='/registration/business-case'>
                            <h4>BUSINESS CASE COMPETITION</h4>
                        </Link>
                        <Link to='/registration/petrodebate'>
                            <h4>PETRODEBATE COMPETITION</h4>
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
}