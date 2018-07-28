import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

ReactDOM.render(
    <div>
        <Navigation />
        <Header />
    </div>
    , 
    document.getElementById('root')
);
registerServiceWorker();
