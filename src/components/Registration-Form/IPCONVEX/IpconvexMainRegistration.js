import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    } from 'reactstrap';

import '../../../index.css';

export default class IpconvexMainRegistration extends Component {
    render() {
        return(
            <div>
                <Container>
                    <div className='title'>
                        <img 
                            src={require('../../../images/Registration/5_1_Register Now_Main Page.png')}
                        />
                    </div>
                    <div className='registration-option'>
                        <h2><strong>ARE YOU A STUDENT OR A PROFESSIONAL?</strong></h2>
                        <Link to='/registration/ipconvex/student'>
                            <h4>STUDENT</h4>
                        </Link>
                        <Link to='/registration/ipconvex/professional'>
                            <h4>PROFESSIONAL</h4>
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
} 