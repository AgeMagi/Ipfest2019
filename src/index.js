import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Event_Summary from './components/Event-Summary/Event_Summary'

ReactDOM.render(
    <div>
        <Navigation />
        <Header />
        <Event_Summary />
    </div>
    , 
    document.getElementById('root')
);
registerServiceWorker();
