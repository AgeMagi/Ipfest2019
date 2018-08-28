import React, { Component } from 'react'

import Navigation from '../Navigation/Navigation';
import Header from './Header/Header';
import EventSummary from './Event-Summary/EventSummary';
import News from './News/News';
import FurtherInqueries from './Further-Inqueries/FurtherInquiries';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <EventSummary />
                <News />
                <FurtherInqueries />
            </div>
        );
    }
}