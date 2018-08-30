import React, { Component } from 'react';

import HeaderEvent from './Header/Header';
import Details from './Details/Details';

export default class Event extends Component {
    render() {
        return(
            <div>
                <HeaderEvent />
                <Details />
            </div>
        )
    }
}