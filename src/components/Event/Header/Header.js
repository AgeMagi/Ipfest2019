import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './Header.css';

export default class HeaderEvent extends Component {
    render() {
        return(
            <div className='header-event-div'>
                <Container className='header-event'>
                    <img 
                        src={require('../../../images/Timeline.png')}
                    />
                </Container>
            </div>
            
        );
    }
}