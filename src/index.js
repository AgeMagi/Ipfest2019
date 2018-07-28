import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import EventSummary from './components/Event-Summary/EventSummary';
import News from './components/News/News';
import FurtherInqueries from './components/Further-Inqueries/FurtherInquiries';
import Footer from './components/Footer/Footer';

ReactDOM.render(
    <div>
        <Navigation />
        <Header />
        <EventSummary />
        <News />
        <FurtherInqueries />
        <Footer />
    </div>
    , 
    document.getElementById('root')
);
registerServiceWorker();
