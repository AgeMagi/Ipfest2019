import React, { Component } from 'react';
import { Image, Grid} from 'semantic-ui-react';

import './Navigation.css'

class Navigation extends Component {
    render() {
        return (  
            <div className='navbar'>
                <Grid columns={5}>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="navbar-link">
                                <a> 
                                    <h1>ABOUT</h1>
                                </a>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="navbar-link">
                                <a>
                                    <h1>EVENTS</h1>
                                </a>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <Image size="small" src={require('../../images/Logo.png')} />
                        </Grid.Column>
                        <Grid.Column>
                            <div className="navbar-link">
                                <a>
                                    <h1>REGISTRATION</h1>
                                </a>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="navbar-link">
                                <a>
                                    <h1>SPONSORS & MEDIA</h1>
                                </a>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    };
}

export default Navigation;