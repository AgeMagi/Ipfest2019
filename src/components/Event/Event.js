import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import HeaderEvent from './Header/Header';
import Details from './Details/Details';
import Footer from '../Footer/Footer';

export default class Event extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <HeaderEvent />
                <Details />
                <Footer />
            </div>
        )
    }
}