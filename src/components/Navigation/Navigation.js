import React, { Component } from 'react';
import { Image, Grid} from 'semantic-ui-react';

import './Navigation.css'

class Navigation extends Component {
    render() {
        return (  
            <div className='navbar'>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image className='logo-navbar' src={require('../../images/Logo.png')} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={require('../../images/Logo.png')} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={require('../../images/Logo.png')} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    };
}

export default Navigation;