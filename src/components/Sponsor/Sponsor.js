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
                <div className='bronze'>
                    <div className='sponsor-title'>
                        <h1>BRONZE</h1>
                    </div>   
                    <Row className='justify-content-around'>
                        <img 
                            src={require('../../images/Sponsor/Bronze/Layer 5.png')}
                        />  
                        <img 
                            src={require('../../images/Sponsor/Bronze/Layer 6.png')}
                        />  
                        <img 
                            src={require('../../images/Sponsor/Bronze/Layer 7.png')}
                        /> 
                        <img 
                            src={require('../../images/Sponsor/Bronze/Layer 8.png')}
                        /> 
                    </Row>    
                    <Row className='justify-content-around'>
                        <img 
                            src={require('../../images/Sponsor/Bronze/Layer 9.png')}
                        />
                        <img 
                            src={require('../../images/Sponsor/Bronze/Layer 10.png')}
                        />     
                    </Row>                 
                </div>           
            </div>
        )
    }
}