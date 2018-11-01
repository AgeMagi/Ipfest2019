import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { 
    Badge, 
    Row,
    Col,
} from 'reactstrap';

import './Header.css';

class Header extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
            daysLeft: 0,
            hoursLeft: 0,
            minutesLeft: 0,
            secondsLeft: 0,
        }
    }

    componentDidMount() {
        const targetDate = 32;
        const todayDate = new Date().getDate();
    }



    render() {
        return (
            <div className='header-container'>
                <video autoPlay muted loop className='video-header'>
                    <source src={require('../../../videos/VideoForHome.mp4')} />
                </video>
                <div className="header-quote">
                    <h1><strong>"Broadening Insights on Dealing with Future Energy Demand"</strong></h1>
                    <Row className='justify-content-sm-center'>
                        <Col sm='6'>
                            <a href="https://drive.google.com/uc?export=download&id=12Ofr_w7qqltEoT09usy7HqMuOahkcB6V" target="__blank">                                
                                <div className='event-type'>
                                    <h3>Invitation Letter</h3>
                                </div>  
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>   
        );
    }
}

export default Header;