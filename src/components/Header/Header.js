import React, { Component } from 'react';

import { Badge } from 'reactstrap';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <video autoPlay muted loop className='video-header'>
                    <source src={require('../../videos/VideoForHome.mp4')} />
                </video>
                <div className="header-quote">
                    <h1><strong>"Broadening Insights on Dealing with Future Energy Demand"</strong></h1>
                    <h1>
                        <Badge className="header-badge" color="danger" pill>
                            31 DAYS LEFT
                        </Badge>
                    </h1>
                </div>
            </div>   
        );
    }
}

export default Header;