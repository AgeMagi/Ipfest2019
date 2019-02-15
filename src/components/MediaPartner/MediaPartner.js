import React, {Component} from 'react';

import './MediaPartner.css';
export default class MediaPartner extends Component {
    render() {
        return(
            <div>
                <div className="sponsors media-partner">
                    <img 
                        src={require('../../images/Sponsor/media-partner.png')}
                    />
                </div>                
            </div>
        )
    }
}