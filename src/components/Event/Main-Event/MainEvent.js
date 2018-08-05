import React, { Component } from 'react';

import Content from './Content/Content';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';



export default class MainEvent extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <Content />
                <Footer />
            </div>
        );
    }
}