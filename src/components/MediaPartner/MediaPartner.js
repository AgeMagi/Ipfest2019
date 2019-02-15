import React, {Component} from 'react';

export default class MediaPartner extends Component {
    render() {
        return(
            <div>
                <div className="sponsors">
                    <img 
                        src={require('../../images/Sponsor/media-partner.png')}
                    />
                </div>                
            </div>
        )
    }
}