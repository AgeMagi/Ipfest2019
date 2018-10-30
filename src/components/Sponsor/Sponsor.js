import React, {Component} from 'react';

import {
    Container,
    Row,
    } from 'reactstrap';

import './Sponsor.css';

export default class Sponsor extends Component {
    render() {
        return(
            <div className='sponsor'>
                <div className='title'>
                    <img 
                        src={require('../../images/Sponsor/Sponsors.png')}
                    />
                </div>
                <div className="sponsors">
                    
                    <img 
                        src={require('../../images/Sponsor/sponsors.png')}
                    />
                </div>                
            </div>
        )
    }
}